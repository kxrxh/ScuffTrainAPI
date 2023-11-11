import { parseStage, parseStations, parseTrains, parseWagons } from "./csvParser";
import { PrismaClient } from '@prisma/client';
import { Stage, Station, Train, Wagon } from "../types/types";
import { readFileSync } from "fs";
import { resolve } from "path";
import { parse } from "csv-parse";

const prisma = new PrismaClient();

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


// await loadWagonsFromCSV("data/disl_hackaton.csv")

// await loadTrainsFromCSV("data/disl_hackaton.csv")

// await loadStationsFromCSV("data/STATION_COORDS_HACKATON.csv")

// await loadStagesFromCSV("data/PEREGON_HACKATON.csv")
