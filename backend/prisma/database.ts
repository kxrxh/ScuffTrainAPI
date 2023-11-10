import { PrismaClient, Stage } from '@prisma/client';

const prisma = new PrismaClient();


/**
 * Retrieves the stage by its start station ID.
 *
 * @param {number} id - The ID of the start.
 * @returns {Promise<Stage[]>} - A promise that resolves to an array of stages.
 */
export async function getStagesByOrigin(id: number): Promise<Stage[]> {
    return await prisma.stage.findMany({
        where: {
            start_id: id
        }
    })
}

/**
 * Retrieves stages by their end ID.
 *
 * @param {number} id - The end ID.
 * @return {Promise<Stage[]>} A promise that resolves to an array of stages.
 */
export async function getStageByEnd(id: number): Promise<Stage[]> {
    return await prisma.stage.findMany({
        where: {
            end_id: id
        }
    })
}

/**
 * Retrieves all stages.
 *
 * @return {Promise<Stage[]>} Promise that resolves to an array of Stage objects.
 */
export async function getStages(): Promise<Stage[]> {
    return await prisma.stage.findMany();
}

/**
 * Retrieves all stations.
 *
 * @return {Promise<Station[]>} An array of stations.
 */
export async function getAllStations() {
    return await prisma.station.findMany();
}

/**
 * Retrieves the coordinates of a station based on its ID.
 *
 * @param {number} id - The ID of the station.
 * @return {Promise<object>} A promise that resolves to the coordinates of the station.
 */
export async function getStationCoords(id: number) {
    return await prisma.station.findUnique({
        where: {
            id: id
        }
    })
}