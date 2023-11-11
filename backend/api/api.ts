import { Router } from "bunrest/src/router/router";
import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { getPathInfoFull, getPathInfoShort, getStationById, getStations, getTrainByIdFull, getTrainByIdShort, getTrains, postImportUploadTrain, postUploadStage, postUploadStation } from "./handlers";

/**
 * Initializes the API by setting up the routes.
 *
 * @param {BunServer} app - The bunrest server object.
 */
export function initApi(app: any) {
    const routerV1: Router = app.router();

    routerV1.get("/ping", (_req: BunRequest, res: BunResponse) => res.status(200).json({ message: "pong", time: new Date().toISOString() }));

    routerV1.post("/upload/stage/:filename", postUploadStage);
    routerV1.post("/upload/station/:filename", postUploadStation);
    routerV1.post("/upload/train/:filename", postImportUploadTrain);

    routerV1.get("/station/:id", getStationById); // !Done (3 TODOs)
    routerV1.get("/station/all", getStations); // !Done (2 TODOs)

    routerV1.get("/train/all", getTrains); // *Done
    routerV1.get("/train/short/:id", getTrainByIdShort); // *Done
    routerV1.get("/train/full/:id", getTrainByIdFull); // *Done

    routerV1.get("/train/path/full/:id", getPathInfoFull);
    routerV1.get("/train/path/short/:id", getPathInfoShort);



    app.use('/v1/', routerV1);
}