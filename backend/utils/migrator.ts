import { parseStage, parseDislocation, parseStations } from "./csvParser";
import { PrismaClient, Stage, Station } from '@prisma/client';
import { Dislocation, Train, Wagon } from "../types/types";

const prisma = new PrismaClient();

/**
 * Loads dislocation data from a CSV file.
 *
 * @param {string} filename - The name of the CSV file.
 * @return {Promise<void>} - A promise that resolves when the data is loaded.
 */
export async function loadDislocationFromCSV(filename: string) {
    await prisma.$connect();
    (await parseDislocation(filename)).map(async (dislocation) => {
        const _ = await prisma.dislocation.create({
            data: {
                wagon_number: 0,
                operation_date: new Date(dislocation.OPERDATE),
                station_id_dislocation: dislocation.ST_ID_DISL - 0,
                station_id_destination: dislocation.ST_ID_DEST - 0,
                train_index: dislocation.TRAIN_INDEX,
            },
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect()
        });
    });
}

/**
 * Loads a stage from a CSV file.
 *
 * @param {string} filename - The name of the CSV file.
 * @return {Promise<void>} - A promise that resolves when the stage is loaded.
 */
export async function loadStageFromCSV(filename: string) {
    await prisma.$connect();
    (await parseStage(filename)).map(async (dislocation) => {
        const _ = await prisma.stage.create({
            data: {
                start_id: dislocation.START_CODE - 0,
                end_id: dislocation.END_CODE - 0,
                length: dislocation.LEN - 0,
            },
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect()
        })
    });

}

/**
 * Loads stations from a CSV file.
 *
 * @param {string} filename - The name of the CSV file.
 * @return {Promise<void>} A promise that resolves when the stations have been loaded.
 */
export async function loadStationsFromCSV(filename: string) {
    await prisma.$connect();
    (await parseStations(filename)).map(async (station) => {
        const _ = await prisma.station.create({
            data: {
                id: station.ST_ID - 0,
                latitude: station.LATITUDE - 0,
                longitude: station.LONGITUDE - 0,
            },
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect()
        })
    });
}


/**
 * Loads trains from a CSV file and returns an array of Train objects.
 *
 * @param {string} filename - The name of the CSV file to load.
 * @return {Promise<Train[]>} An array of Train objects representing the loaded trains.
 */
export async function loadTrainsFromCSV(filename: string):Promise<Train[]>{
    let dislocations = await parseDislocation(filename);
    let trains: Train[] = [];
    let wagons: Wagon[] = [];
    
    for (let i = 0; i < dislocations.length; i++) {
        const trainIndexes = dislocations[i].TRAIN_INDEX.split('-');
        if (trainIndexes.length === 3) {
            const trainCreationStation = parseInt(trainIndexes[0]);
            const trainId = parseInt(trainIndexes[1]);
            const trainDestinationStation = parseInt(trainIndexes[2]);

            let wagon: Wagon = {
                id: dislocations[i].WAGNUM-0,
                operation_date: dislocations[i].OPERDATE,
                last_station_id: dislocations[i].ST_ID_DISL-0,
                wagon_destination_id: dislocations[i].ST_ID_DEST-0,
                train_id: trainId
            };

            let existingTrain = trains.find(train => train.id === trainId);

            if (existingTrain) {
                let trainIndex = trains.findIndex(train => train.id === trainId);
                trains[trainIndex].wagons.push(wagon);
            } else {
                const train: Train = {
                    id: trainId,
                    start_id: trainCreationStation,
                    end_id: trainDestinationStation,
                    wagons: [wagon] 
                };
                trains.push(train);
            }
            
            wagons.push(wagon);
        }
    }

    return trains;
}
