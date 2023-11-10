import { PrismaClient, Stage } from '@prisma/client';

const prisma = new PrismaClient();


/**
 * Retrieves the stage by its start station ID.
 *
 * @param {number} id - The ID of the start.
 * @returns {Promise<Stage[]>} - A promise that resolves to an array of stages.
 */
export async function get_stages_by_origin(id: number): Promise<Stage[]> {
    return await prisma.stage.findMany({
        where: {
            start_id: id
        }
    })
}

export async function get_stage_by_end(id: number): Promise<Stage[]> {
    return await prisma.stage.findMany({
        where: {
            end_id: id
        }
    })
}

export async function get_stages(): Promise<Stage[]> {
    return await prisma.stage.findMany();
}

export async function get_all_stations() {
    return await prisma.station.findMany();
}

export async function get_station_coords(id: number) {
    return await prisma.station.findUnique({
        where: {
            id: id
        }
    })
}