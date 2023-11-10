import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { get_all_stations, get_stages_by_origin, get_station_coords } from "../prisma/database";


/**
 * Retrieves the wagons associated with a specific train ID.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function get_wagons_by_train_id(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

/**
 * Retrieves the coordinates of a station by its ID.
 *
 * @param {BunRequest} req - the request object
 * @param {BunResponse} res - the response object
 */
export async function get_station_coords_by_id(req: BunRequest, res: BunResponse) {
    const body = req.body;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        return;
    }

    if (typeof (body) != "object") {
        res.status(400).json({ message: "Invalid body" });
        return;
    }

    if (!body.station_id) {
        res.status(400).json({ message: "Missing station_id" });
        return;
    }

    const station_id = body.station_id;

    res.status(200).json({ coords: get_station_coords(station_id) });
}

/**
 * Retrieves all available destinations for a given origin with road length.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function get_station_stages(req: BunRequest, res: BunResponse) {
    // Reading the origin id from the request and searching for the corresponding station
    const body = req.body;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        return;
    }

    if (typeof (body) != "object") {
        res.status(400).json({ message: "Invalid body" });
        return;
    }

    if (!body.origin_id) {
        res.status(400).json({ message: "Missing origin_id" });
        return;
    }

    const origin_id = body.origin_id;
    const stages = await get_stages_by_origin(origin_id);
    res.status(200).json({ stages: stages });
}


/**
 * Retrieves all available stations.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function get_stations(req: BunRequest, res: BunResponse) {
    res.status(200).json({ stations: await get_all_stations() });
}


/**
 * Retrieves all available trains.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
*/

export async function get_trains(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}


/**
 * Retrieves a train information by its ID.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
*/
export async function get_train_by_id(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

/**
 * Retrieves trains information by the given destination ID.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function get_trains_by_destination(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

/**
 * Retrieves trains information by the given origin ID.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function get_trains_by_origin(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}
