import { ActionHistory, PrismaClient } from '.prisma/client';
import { StationShortDTO, TrainFullDTO, TrainShortDTO } from './dto';
import { Dijkstra, getCurrentCoords } from '../utils/utils';
import { trainsdataNStop } from '../utils/data/constants/trainsdataNStop';

const prisma = new PrismaClient();




/**
 * Retrieves all stations.
 *
 * @return {Promise<Station[]>} An array of stations.
 */
export async function getAllStations(): Promise<StationShortDTO[] | null> {
    const stations = await prisma.station.findMany();
    const res = stations.map((station) => {
        return {
            id: station.id,
            coords: [station.latitude, station.longitude],
            departure: {} as TrainShortDTO,
            current_num: 0,
        };
    });

    return res;
}

/**
 * Retrieves the complete information about a path identified by the destination ID.
 *
 * @param {number} destId - The ID of the destination.
 * @return {Promise<Stage[]> | null} - The stages that make up the path, or null if no path is found.
 */
export async function getPathInfoFull(destId: number) {
    const res = await prisma.stage.findMany({
        where: {
            start_id: destId
        }
    });
    if (!res) {
        return null
    }

}

/**
 * Retrieves all trains from the database.
 *
 * @return {Promise<Train[]>} An array of Train objects representing all trains in the database.
 */
// export async function getAllTrains(): Promise<TrainShortDTO[] | null> {
export async function getAllTrainsByTime(time: number): Promise<any> {
    const trainData = await prisma.train.findMany({
        include: {
            start: true,
            end: true,
            wagons: {
                include: {
                    destination: true,
                },
            },
            actions: {
                include: {
                    destination: true,
                    dislocation: true,
                },
            },
        },
    });

    return Object.keys(trainData).map((key: string) => {
        return {
            id: (key),
            start_id: key.split("-")[0] as any - 0,
            dest_id: key.split("-")[2] as any - 0,
            is_move: isTrainMoving(key as unknown as number),
            move_time: (time - (trainsdataNStop as any)[key].operdate) / 60000
        }
    })
}

/**
 * Retrieves a TrainShortDTO object from the database based on the given id.
 *
 * @param {number} id - The id of the train to retrieve.
 * @return {Promise<TrainShortDTO | null>} - A Promise that resolves to a TrainShortDTO object if found, or null if not found.
 */
export async function getTrainShort(id: string, time: number): Promise<any> {

    if (!trainsdataNStop[id]) {
        return null
    }
    const stationFrom = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].disl - 0
        }
    })
    const stationTo = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].nextStop.disl - 0
        }
    })
    const coords = getCurrentCoords(
        {
            lat: stationFrom?.latitude as any - 0,
            long: stationFrom?.longitude as any - 0
        },
        {
            lat: stationTo?.latitude as any - 0,
            long: stationTo?.longitude as any - 0
        },
        trainsdataNStop[id].operdate,
        trainsdataNStop[id].nextStop.operdate,
        time
    )
    return {
        id: id,
        start_id: id.split("-")[0] as any - 0,
        dest_id: id.split("-")[2] as any - 0,
        is_move: isTrainMoving(id as unknown as number),
        move_time: (time - trainsdataNStop[id].operdate) / 1000 / 60,
        coords: coords
    }
}

/**
 * Retrieves the full information for a train based on its ID.
 *
 * @param {number} id - The ID of the train.
 * @return {Promise<TrainFullDTO | null>} A promise that resolves to the full information of the train, or null if the train does not exist.
 */
export async function getTrainFull(id: string, time: number): Promise<any> {

    if (!trainsdataNStop[id]) {
        return null
    }
    const stationFrom = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].disl as number - 0
        }
    })
    const stationTo = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].nextStop.disl as number - 0
        }
    })
    const coords = getCurrentCoords(
        {
            lat: stationFrom?.latitude as number - 0,
            long: stationFrom?.longitude as number - 0
        },
        {
            lat: stationTo?.latitude as number - 0,
            long: stationTo?.longitude as number - 0
        },
        trainsdataNStop[id].operdate,
        trainsdataNStop[id].nextStop.operdate,
        time
    )
    return {
        id: id,
        start_id: id.split("-")[0] as unknown as number - 0,
        dest_id: id.split("-")[2] as unknown as number - 0,
        is_move: isTrainMoving(id as unknown as number),
        move_time: (time - trainsdataNStop[id].operdate) / 1000 / 60,
        wagons: trainsdataNStop[id].wagons.map((w: any) => {
            return {
                id: w.number - 0, start_id: w.ST_ID_DISL, dest_id: w.ST_ID_DEST, operation_date: w.OPERDATE
            }
        }),
        coords: coords
    }
}

/**
 * Retrieves the last action history for a given wagon ID.
 *
 * @param {number} wagonId - The ID of the wagon.
 * @return {Promise<ActionHistory | null>} A promise that resolves with the last action history for the wagon, or null if no history is found.
 */
export async function getLastWagonStationAndTime(wagonId: number): (Promise<ActionHistory | null>) {
    const res = await prisma.actionHistory.findMany({
        where: {
            wagon_id: wagonId
        },
        orderBy: {
            action_date: 'desc'
        },
        take: 1
    });
    if (!res) {
        return null
    }
    return res[0]
}

/**
 * Determines if a train is currently moving.
 *
 * @param {number} trainId - The ID of the train.
 * @returns {Promise<boolean>} A boolean indicating whether the wagon is moving or not.
 */
export async function isTrainMoving(trainId: number): Promise<boolean> {
    const actionHistory = await prisma.actionHistory.findMany({
        where: {
            train_id: trainId.toString().split("-")[1] as any - 0
        },
        orderBy: {
            action_date: 'desc'
        },
        take: 2
    });

    if (!actionHistory) {
        return false;
    }

    if (actionHistory.length < 2) {
        return true;
    }

    const [previousAction, lastAction] = actionHistory;

    if (previousAction.dislocation_id !== lastAction.dislocation_id) {
        return true;
    }

    return false;
}

/**
 * Retrieves the coordinates of a station based on its ID.
 *
 * @param {number} id - The ID of the station.
 * @return {Promise<StationLongDTO | null >} A promise that resolves to the coordinates of the station.
 */
export async function getStation(id: number): Promise<void> {

    const train = await prisma.train.findUnique({
        where: {
            train_number: id,
        },
        include: {
            start: true, // Include the start station details
            end: true,   // Include the end station details
        },
    });

    if (train) {
        const startStation = train.start; // Details of the starting station
        const endStation = train.end;     // Details of the ending station

        console.log(`Start Station: ${startStation.station_id}`);
        console.log(`End Station: ${endStation.station_id}`);
        // You can access other station details as needed
    } else {
        console.log('Train not found');
    }
}

/**
 * Retrieves a slice of the action history timeline up to the specified date.
 *
 * @param {Date} upperDate - The upper date limit to retrieve the slice of the timeline.
 * @return {Promise<Array<ActionHistory> | null>} - A promise that resolves to an array of action history objects if successful, or null if no data is found.
 */
export async function sliceTimeLine(border: Date): Promise<Array<ActionHistory> | null> {
    border.setHours(border.getHours() + 3)

    const data = await prisma.actionHistory.findMany({
        where: {
            action_date: {
                gte: border
            }
        },
        orderBy: {
            action_date: 'desc'
        }
    });
    if (!data) {
        return null;
    }
    return data;
}

/**
 * Retrieves the full path for a given train ID.
 *
 * @param {number} id - The ID of the train.
 * @return {Promise<string|null>} The full path for the train, or null if the train does not exist or there is no path available.
 */
export async function getFullPath(id: string, time: number) {
    const train = await getTrainFull(id, time);
    if (!train) {
        return null
    }
    //console.log(train);
    const res = Dijkstra(train.wagons[0].start_id + "", train.wagons[0].dest_id + "");
    if (!res) {
        return null
    }
    return { "path_data": res, "trains_on_path": [] };
}

/**
 * Truncates the specified table and all its associated data in a cascading manner.
 *
 * @param {string} tableName - The name of the table to be truncated.
 * @return {Promise<void>} - A promise that resolves when the table is successfully truncated.
 */
export async function truncateTableCascade(tableName: string) {
    try {
        await prisma.$queryRawUnsafe(`TRUNCATE "${tableName}" CASCADE`);

        console.log(`Table '${tableName}' truncated with cascade.`);
    } catch (error) {
        console.error(`Error truncating table '${tableName}' with cascade:`, error);
    } finally {
        await prisma.$disconnect();
    }
}
