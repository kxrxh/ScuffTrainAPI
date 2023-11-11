import { parseStage, parseStations, parseTrains, parseWagons } from "./csvParser";
import { PrismaClient } from '@prisma/client';
import { Station, Train, Wagon } from "../types/types";

const prisma = new PrismaClient();

/**
 * Loads stages from a CSV file.
 *
 * @param {string} filename - The name of the CSV file.
 * @return {Promise<void>} A promise that resolves when the stages are loaded.
 */
export async function loadStagesFromCSV(filename: string) {
    await prisma.$connect();
    (await parseStage(filename)).map(async (dislocation) => {
        const _ = await prisma.stage.create({
            data: {
                length: dislocation.length,
                start_id: dislocation.start,
                end_id: dislocation.end,
            },
        }).finally(async () => { await prisma.$disconnect() }).catch((err) => {
            console.error(err)
        })
    });

}

/**
 * Loads stations from a CSV file.
 *
 * @param {string} filename - The name of the CSV file to load stations from.
 * @return {Promise<void>} - A promise that resolves when the stations are loaded.
 */
export async function loadStationsFromCSV(filename: string) {
    await prisma.$connect();
    (await parseStations(filename)).map(async (station: Station) => {
        const _ = await prisma.station.create({
            data: {
                station_id: station.station_id,
                latitude: station.latitude,
                longitude: station.longitude,
            },
        }).finally(async () => { await prisma.$disconnect() }).catch((err) => {
            console.error(err)
        })
    });
}

/**
 * Loads trains from a CSV file.
 *
 * @param {string} filename - The name of the CSV file to load trains from.
 * @return {Promise<void>} A promise that resolves when the trains have been loaded.
 */
export async function loadTrainsFromCSV(filename: string) {
    await prisma.$connect();
    (await parseTrains(filename)).map(async (train: Train) => {
        const _ = await prisma.train.create({
            data: {
                is_move: train.is_move, // Assuming is_move always true for the provided data
                start_id: train.start_id,
                end_id: train.end_id,
                train_number: train.train_number,
            }
        }).finally(async () => { await prisma.$disconnect() }).catch((err) => {
            console.error(err)
        })
    })
}


/**
 * Loads wagons from a CSV file.
 *
 * @param {string} filename - The name of the CSV file.
 * @return {Promise<void>} A promise that resolves when the wagons are loaded.
 */
export async function loadWagonsFromCSV(filename: string) {
    await prisma.$connect();
    (await parseWagons(filename)).map(async (wagon: Wagon) => {
        const _ = await prisma.wagon.create({
            data: {
                wagon_number: wagon.wagon_number,
                train_id: wagon.train_id,
                destination_id: wagon.destination_id
            }
        }).finally(async () => { await prisma.$disconnect() }).catch((err) => {
            console.error(err)
        })
    })
}

