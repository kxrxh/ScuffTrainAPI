import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { getAllStations, getAllTrains, getStation, getTrainFull, getTrainShort } from "../prisma/database";
import { loadStageFromCSV, loadStationsFromCSV, loadTrainsFromCSV } from "../utils/migrator";


/**
 * Retrieves the coordinates of a station by its ID.
 *
 * @param {BunRequest} req - the request object
 * @param {BunResponse} res - the response object
 */
export async function getStationById(req: BunRequest, res: BunResponse) {
    const params = req.params;

    if (!params) {
        res.status(400).json({ message: "Missing params" });
        return;
    }

    if (!params.id) {
        res.status(400).json({ message: "Missing id" });
        return;
    }

    if (typeof (params.id) != "number") {
        res.status(400).json({ message: "Invalid id" });
        return;
    }
    const station = await getStation(params.id);
    if (!station) {
        res.status(404).json({ message: "Station not found" });
        return;
    }
    res.status(200).json({ station: station });
}

/**
 * Retrieves all available stations.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 */
export async function getStations(req: BunRequest, res: BunResponse) {
    const stations = await getAllStations();
    if (!stations) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
    res.status(200).json({ stations: await getAllStations() });
}

/**
 * Retrieves all available trains.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
*/
export async function getTrains(req: BunRequest, res: BunResponse) {
    const trains = await getAllTrains();
    if (!trains) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
    res.status(200).json({ trains: trains });
}

/**
 * Retrieves a train by its ID and sends a JSON response.
 *
 * @param {BunRequest} req - the request object
 * @param {BunResponse} res - the response object
 * @return {Promise<void>} - a promise that resolves when the response is sent
 */
export async function getTrainByIdShort(req: BunRequest, res: BunResponse) {
    const params = req.params;
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        return;
    }
    if (!params.id) {
        res.status(400).json({ message: "Missing id" });
        return;
    }
    if (typeof (params.id) != "number") {
        res.status(400).json({ message: "Invalid id" });
        return;
    }
    const train = await getTrainShort(params.id);
    if (!train) {
        res.status(404).json({ message: "Train not found" });
        return;
    }
    res.status(200).json({ train: train });
}

/**
 * Retrieves the full information of a train by its ID.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 * @return {Promise<void>} - Returns a promise that resolves to void.
 */
export async function getTrainByIdFull(req: BunRequest, res: BunResponse) {
    const params = req.params;
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        return;
    }

    if (!params.id) {
        res.status(400).json({ message: "Missing id" });
        return;
    }

    if (typeof (params.id) != "number") {
        res.status(400).json({ message: "Invalid id" });
        return;
    }

    const train = await getTrainFull(params.id);
    if (!train) {
        res.status(404).json({ message: "Train not found" });
        return;
    }

    res.status(200).json({ train: train });
}

export async function getPathInfoFull(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
}

export async function getPathInfoShort(req: BunRequest, res: BunResponse) {
    throw new Error("Function not implemented.");
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
    const path = Bun.file(`utils/data/${params.filename}.csv`);
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
    const path = Bun.file(`utils/data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadStationsFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "File uploaded" });
}

/**
 * Handles uploading of data.
 *
 * @param {BunRequest} req - the request object containing the data to be imported
 * @param {BunResponse} res - the response object used to send the import status
 * @return {Promise<void>} a promise that resolves once the import and training are complete
 */
export async function postImportUploadTrain(req: BunRequest, res: BunResponse) {
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
    const path = Bun.file(`utils/data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadTrainsFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "Trains imported" });

}