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

export async function getStageByEnd(id: number): Promise<Stage[]> {
    return await prisma.stage.findMany({
        where: {
            end_id: id
        }
    })
}

export async function getStages(): Promise<Stage[]> {
    return await prisma.stage.findMany();
}

export async function getAllStations() {
    return await prisma.station.findMany();
}

export async function getStationCoords(id: number) {
    return await prisma.station.findUnique({
        where: {
            id: id
        }
    })
}