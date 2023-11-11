import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { getAllStations, getAllTrainsByTime, getFullPath, getLastWagonStationAndTime, getStation, getTrainFull, getTrainShort, isTrainMoving, truncateTableCascade } from "../prisma/database";
import { loadStagesFromCSV, loadStationsFromCSV, loadTrainsFromCSV, loadWagonsFromCSV } from "../utils/migrator";
import { TrainShortDTO } from "../prisma/dto";
import { ActionHistory, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
 * Retrieves all trains from the database.
 *
 * @return {Promise<Train[]>} An array of Train objects representing all trains in the database.
 */
export async function getAllTrains(): Promise<TrainShortDTO[] | null> {
    const trains = await prisma.train.findMany();
    if (!trains) {
        return null
    }
    let trainsDTO: TrainShortDTO[] = [];

    for (const train of trains) {
        const isMoving = await isTrainMoving(train.train_number);
        let time = -1;
        if (isMoving) {
            const lastTime: ActionHistory | null = await getLastWagonStationAndTime(train.train_number);
            if (lastTime) {
                time = new Date().getTime() - lastTime.action_date.getTime();
            }
        }
        trainsDTO.push({
            id: train.train_number,
            start_id: train.start_id,
            dest_id: train.end_id,
            is_move: isMoving,
            move_time: time
        })
    }
    return trainsDTO
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
        console.error("No trains found when retrieving trains");
        return;
    }
    res.status(200).json({ trains: trains });
}

/**
 * Retrieves all available trains.
 * 
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
*/
export async function getTrainsByTime(req: BunRequest, res: BunResponse) {
    const params = req.params;
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }
    if (!params.time) {
        res.status(400).json({ message: "Missing time" });
        console.error("Missing time");
        return;

    }
    const trains = await getAllTrainsByTime(params.time - 0);
    if (!trains) {
        res.status(500).json({ message: "Internal server error" });
        console.error("No trains found when retrieving trains");
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
        console.error("Missing params");
        return;
    }
    if (!params.id) {
        res.status(400).json({ message: "Missing id" });
        console.error("Missing id");
        return;
    }

    if (!params.time) {
        res.status(400).json({ message: "Missing time" });
        console.error("Missing time");
        return;

    }
    const train = await getTrainShort(params.id, params.time - 0);
    if (!train) {
        res.status(404).json({ message: "Train not found" });
        return;
    }
    res.status(200).json({ train: train });
}

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
        console.error("Missing params");
        return;
    }

    if (!params.id) {
        res.status(400).json({ message: "Missing id" });
        console.error("Missing id");
        return;
    }


    const station = await getStation(params.id - 0);

    res.status(200).json({ station: station });
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
        console.error("Missing params");
        return;
    }

    if (!params.id) {
        res.status(400).json({ message: "Missing id" });
        console.error("Missing id");
        return;
    }

    const train = await getTrainFull(params.id, params.time - 0);
    if (!train) {
        res.status(404).json({ message: "Train not found" });
        console.error("Train not found");
        return;
    }

    res.status(200).json({ train: train });
}

export async function getPathInfoFull(req: BunRequest, res: BunResponse) {
    const params = req.params;
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }

    if (!params.id) {
        res.status(400).json({ message: "Missing id" });
        console.error("Missing id");
        return;
    }

    if (!params.time) {
        res.status(400).json({ message: "Missing time" });
        console.error("Missing time");
        return;
    }

    const answer = await getFullPath(params.id, params.time - 0);
    if (!answer) {
        res.status(404).json({ message: "Path not found" });
        console.error("Path not found");
        return;
    }

    res.status(200).json({ path: answer });
}

/**
 * Handles uploading of data.
 *
 * @param {BunRequest} req - the request object containing the data to be imported
 * @param {BunResponse} res - the response object used to send the import status
 * @return {Promise<void>} a promise that resolves once the import and training are complete
 */
export async function postImportTrain(req: BunRequest, res: BunResponse) {
    const body = req.body;
    const params = req.params;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        console.error("Missing body");
        return;
    }
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }

    if (!params.filename) {
        res.status(400).json({ message: "Missing filename" });
        console.error("Missing filename");
        return;
    }
    const path = Bun.file(`utils/data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadTrainsFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "Trains imported" });
    console.log("Trains imported");

}

export async function postImportWagon(req: BunRequest, res: BunResponse) {
    const body = req.body;
    const params = req.params;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        console.error("Missing body");
        return;
    }
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }

    if (!params.filename) {
        res.status(400).json({ message: "Missing filename" });
        console.error("Missing filename");
        return;
    }
    const path = Bun.file(`utils/data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadWagonsFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "Wagons imported" });
    console.log("Wagons imported");

}
/**
 * Handles the POST request to import a stage.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 * @return {Promise<void>} - Returns a Promise that resolves when the function is complete.
 */
export async function postImportStage(req: BunRequest, res: BunResponse) {
    const body = req.body;
    const params = req.params;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        console.error("Missing body");
        return;
    }
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }

    if (!params.filename) {
        res.status(400).json({ message: "Missing filename" });
        console.error("Missing filename");
        return;
    }
    const path = Bun.file(`utils/data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadStagesFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "Stages imported" });
    console.log("Stages imported");

}

/**
 * Handles the POST request to import a station.
 *
 * @param {BunRequest} req - The request object.
 * @param {BunResponse} res - The response object.
 * @return {Promise<void>} - A promise that resolves when the function completes.
 */
export async function postImportStation(req: BunRequest, res: BunResponse) {
    const body = req.body;
    const params = req.params;

    if (!body) {
        res.status(400).json({ message: "Missing body" });
        console.error("Missing body");
        return;
    }
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }

    if (!params.filename) {
        res.status(400).json({ message: "Missing filename" });
        console.error("Missing filename");
        return;
    }
    const path = Bun.file(`utils/data/${params.filename}.csv`);
    await Bun.write(path, body.toString());

    await loadStationsFromCSV(`data/${params.filename}.csv`);

    res.status(200).json({ message: "Stations imported" });
    console.log("Stations imported");

}
export async function deleteTableDB(req: BunRequest, res: BunResponse) {
    const params = req.params;
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }
    console.log("Deleting table: " + params.table);
    await truncateTableCascade(params.table);
    res.status(200).json({ message: "Table deleted" });
    console.log("Table deleted");

}

export async function getStateOfMovingTrain(req: BunRequest, res: BunResponse) {
    const params = req.params;
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }
    let status = await isTrainMoving(params.id);
    res.status(200).json({ message: `Train is ${status}` });
}

export async function getWagonStationTime(req: BunRequest, res: BunResponse) {
    const params = req.params;
    if (!params) {
        res.status(400).json({ message: "Missing params" });
        console.error("Missing params");
        return;
    }
    let wagon = await getLastWagonStationAndTime(params.id);
    res.status(200).json({ wagon: wagon });
}