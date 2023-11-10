import { parseStage, parseDislocation, parseStations } from "./parser";
import { PrismaClient, Stage, Station, Dislocation } from '@prisma/client';

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
                station_id_dislocation: dislocation.ST_ID_DISL-0,
                station_id_destination: dislocation.ST_ID_DEST-0,
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
                start_id: dislocation.START_CODE-0,
                end_id: dislocation.END_CODE-0,
                length: dislocation.LEN-0,
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
                id: station.ST_ID-0,
                latitude: station.LATITUDE-0,
                longitude: station.LONGITUDE-0,
            },
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect()
        })
    });
}
