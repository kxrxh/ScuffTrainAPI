import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { getAllStations, getStagesByOrigin, getStationCoords } from "../prisma/database";
import { loadDislocationFromCSV, loadStageFromCSV, loadStationsFromCSV } from "../utils/migrator";


/**
 * Retrieves the wagons associated with a specific train ID.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function getWagonsByTrainId(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

/**
 * Retrieves the coordinates of a station by its ID.
 *
 * @param {BunRequest} req - the request object
 * @param {BunResponse} res - the response object
 */
export async function getStationCoordsById(req: BunRequest, res: BunResponse) {
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

    res.status(200).json({ coords: getStationCoords(station_id) });
}

/**
 * Retrieves all available destinations for a given origin with road length.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function getStationStages(req: BunRequest, res: BunResponse) {
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
    const stages = await getStagesByOrigin(origin_id);
    res.status(200).json({ stages: stages });
}

/**
 * Retrieves all available stations.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function getStations(req: BunRequest, res: BunResponse) {
    res.status(200).json({ stations: await getAllStations() });
}

/**
 * Retrieves all available trains.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
*/

export async function getTrains(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

/**
 * Retrieves a train information by its ID.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
*/
export async function getTrainById(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

/**
 * Retrieves trains information by the given destination ID.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function getTrainsByDestination(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

/**
 * Retrieves trains information by the given origin ID.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function getTrainsByOrigin(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}


/**
 * Handles the upload of a dislocation file.
 *
 * @param {BunRequest} req - the request object
 * @param {BunResponse} res - the response object
 * @return {Promise<void>} - a promise that resolves when the upload is complete
 */
export async function postUploadDislocation(req: BunRequest, res: BunResponse) {
    const body = req.body;
    const params = req.params;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        return;
    }
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        return;
    }

    if (!params.filename) {
        res.status(400).json({ message: "Missing filename" });
        return;
    }
    const path = Bun.file(`data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadDislocationFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "File uploaded" });
}

/**
 * Handles the upload stage for a post request.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 * @return {Promise<void>} - A promise that resolves when the function completes.
 */
export async function postUploadStage(req: BunRequest, res: BunResponse) {
    const body = req.body;
    const params = req.params;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        return;
    }
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        return;
    }

    if (!params.filename) {
        res.status(400).json({ message: "Missing filename" });
        return;
    }
    const path = Bun.file(`data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadStageFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "File uploaded" });
}

/**
 * Uploads a file and processes its contents to load stations.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 * @return {Promise<void>} A Promise that resolves after the file is uploaded and the stations are loaded.
 */
export async function postUploadStation(req: BunRequest, res: BunResponse) {
    const body = req.body;
    const params = req.params;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        return;
    }
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        return;
    }

    if (!params.filename) {
        res.status(400).json({ message: "Missing filename" });
        return;
    }
    const path = Bun.file(`data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadStationsFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "File uploaded" });
}