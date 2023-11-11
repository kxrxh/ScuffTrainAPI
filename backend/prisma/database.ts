import { ActionHistory, PrismaClient } from '@prisma/client';
import { StationLongDTO, StationShortDTO, TrainFullDTO, TrainShortDTO, WagonShortDTO } from './dto';
import { Dijkstra, findIntersection, getCurrentCoords } from '../utils/utils';
import { trainsdataNStop } from '../utils/data/constants/trainsdataNStop';
import { COORDS } from '../utils/data/constants/COORDS';

const prisma = new PrismaClient();


/**
 * Retrieves all stations.
 *
 * @return {Promise<Station[]>} An array of stations.
 */
export async function getAllStations(): Promise<any> {
    const res = Object.keys(COORDS).map(i => {
        return {
            id: i,
            coords: {
                lat: COORDS[i].lat,
                long: COORDS[i].long
            },
            departure: {},
            current_num: 0
        }
    });
    return res;
    // if (!res) {
    //     return null
    // }
    // let stations: StationShortDTO[] = [];
    // for (const station of res) {
    //     stations.push({
    //         id: station.id,
    //         coords: {
    //             lat: station.latitude,
    //             long: station.longitude
    //         },
    //         departure: {} as TrainShortDTO, // TODO!
    //         current_num: 0 // TODO!
    //     });
    // }
    // return stations
}

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

// ! Here we need graphs ;(
// async function getArrivalsForStation(stationId: number): Promise<TrainShortDTO[] | null> {
//     const trains = 
//     if (!trains) {
//         return null
//     }
//     let trainsDTO: TrainShortDTO[] = [];
//     for (const row of trains) {
//         const train = await getTrainShort(row.train_id);
//         if (train) {
//             trainsDTO.push(train);
//         }
// }



/**
 * Retrieves all trains from the database.
 *
 * @return {Promise<Train[]>} An array of Train objects representing all trains in the database.
 */
// export async function getAllTrains(): Promise<TrainShortDTO[] | null> {
export async function getAllTrains(time: number): Promise<any> {
    return Object.keys(trainsdataNStop).map((key: string) => {
        return {
            id: (key),
            start_id: key.split("-")[0] as any - 0,
            dest_id: key.split("-")[2] as any - 0,
            is_move: trainsdataNStop[key].disl !== trainsdataNStop[key].nextStop.disl,
            move_time: (time - trainsdataNStop[key].operdate)/1000/60
        }
    })
    // const trains = await prisma.train.findMany();
    // if (!trains) {
    //     return null
    // }
    // let trainsDTO: TrainShortDTO[] = [];

    // for (const train of trains) {
    //     const isMoving = await isTrainMoving(train.train_number);
    //     let time = -1;
    //     if (isMoving) {
    //         const lastTime: ActionHistory | null = await getLastWagonStationAndTime(train.train_number);
    //         if (lastTime) {
    //             time = new Date().getTime() - lastTime.action_date.getTime();
    //         }
    //     }
    //     trainsDTO.push({
    //         id: train.train_number,
    //         start_id: train.start_id,
    //         dest_id: train.end_id,
    //         is_move: isMoving,
    //         move_time: time
    //     })
    // }
    // return trainsDTO
}

/**
 * Retrieves a TrainShortDTO object from the database based on the given id.
 *
 * @param {number} id - The id of the train to retrieve.
 * @return {Promise<TrainShortDTO | null>} - A Promise that resolves to a TrainShortDTO object if found, or null if not found.
 */
export async function getTrainShort(id: string, time: number): Promise<any> {

    const stationFrom = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].disl as any - 0
        }
    })
    const stationTo = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].nextStop.disl as any - 0
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
        is_move: trainsdataNStop[id].disl !== trainsdataNStop[id].nextStop.disl,
        move_time: (time - trainsdataNStop[id].operdate)/1000/60,
        coords: coords
    }
    // export async function getTrainShort(id: number): Promise<TrainShortDTO | null> {
    // const train = await prisma.train.findUnique({
    //     where: {
    //         train_number: id
    //     }
    // });
    // if (!train) {
    //     return null
    // }
    // // Parsing the time of last train action and determining if the train is moving
    // // -1 if the train is not moving or error
    // const isMoving = await isTrainMoving(train.train_number);
    // let time = -1;
    // if (isMoving) {
    //     const lastTime: ActionHistory | null = await getLastWagonStationAndTime(train.train_number);
    //     if (lastTime) {
    //         time = new Date().getTime() - lastTime.action_date.getTime();
    //     }
    // }
    // return {
    //     id: train.train_number,
    //     start_id: train.start_id,
    //     dest_id: train.end_id,
    //     is_move: isMoving,
    //     move_time: time,
    // }
}

/**
 * Retrieves the full information for a train based on its ID.
 *
 * @param {number} id - The ID of the train.
 * @return {Promise<TrainFullDTO | null>} A promise that resolves to the full information of the train, or null if the train does not exist.
 */
export async function getTrainFull(id: string, time: number): Promise<any> {
    // export async function getTrainFull(id: number): Promise<TrainFullDTO | null> {
    // const train = await prisma.train.findUnique({
    //     where: {
    //         train_number: id
    //     }
    // });
    // if (!train) {
    //     return null
    // }
    // let wagons = await prisma.wagon.findMany({
    //     where: {
    //         train_id: train.train_number
    //     }
    // })
    // let wagonsDTO: WagonShortDTO[] = [];
    // if (wagons) {
    //     for (const wagon of wagons) {
    //         const wagonInfo: ActionHistory | null = await getLastWagonStationAndTime(wagon.wagon_number);
    //         if (!wagonInfo) {
    //             console.warn('Could not find wagon info for wagon', wagon.wagon_number);
    //             continue;
    //         }
    //         wagonsDTO.push({
    //             id: wagon.wagon_number,
    //             start_id: wagonInfo.dislocation_id,
    //             dest_id: wagon.destination_id,
    //             operation_date: wagonInfo.action_date
    //         })
    //     }
    // }
    // return {
    //     id: train.train_number,
    //     start_id: train.start_id,
    //     dest_id: train.end_id,
    //     is_move: await isTrainMoving(train.train_number),
    //     move_time: null,
    //     wagons: wagonsDTO,
    //     coords: {
    //         lat: 0, // TODO?
    //         long: 0 // TODO?
    //     }
    // }
    const stationFrom = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].disl as any - 0
        }
    })
    const stationTo = await prisma.station.findUnique({
        where: {
            station_id: trainsdataNStop[id].nextStop.disl as any - 0
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
        is_move: trainsdataNStop[id].disl !== trainsdataNStop[id].nextStop.disl,
        move_time: (time - trainsdataNStop[id].operdate)/1000/60,
        wagons: trainsdataNStop[id].wagons.map((w: any) => {
            return {
                id: w.number as any - 0, start_id: w.ST_ID_DISL, dest_id: w.ST_ID_DEST, operation_date: w.OPERDATE
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
async function getLastWagonStationAndTime(wagonId: number): (Promise<ActionHistory | null>) {
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
async function isTrainMoving(trainId: number): Promise<boolean> {
    const actionHistory = await prisma.actionHistory.findMany({
        where: {
            train_id: trainId
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
export async function getStation(id: number): Promise<StationLongDTO | null> {
    const stationInfo = await prisma.station.findUnique({
        where: {
            station_id: id
        }
    });
    if (!stationInfo) {
        return null;
    }
    let departureTrains: TrainShortDTO[] = []
    let arrivalTrains: TrainShortDTO[] = []
    let currentTrains: TrainShortDTO[] = []
    // !TODO: fill arrays with data
    return {
        id: stationInfo.id,
        coords: {
            lat: stationInfo.latitude,
            long: stationInfo.longitude
        },
        departure: departureTrains,
        arrivals: arrivalTrains,
        current: currentTrains
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