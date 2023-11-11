import { Router } from "bunrest/src/router/router";
import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { getPathInfoFull, getPathInfoShort, getStationById, getStations, getTrainByIdFull, getTrainByIdShort, getTrains, postImportStage, postImportStation, postImportTrain, postImportWagon } from "./handlers";

/**
 * Initializes the API by setting up the routes.
 *
 * @param {BunServer} app - The bunrest server object.
 */
export function initApi(app: any) {
    const routerV1: Router = app.router();

    routerV1.get("/ping", (_req: BunRequest, res: BunResponse) => res.status(200).json({ message: "pong", time: new Date().toISOString() }));

    routerV1.get("/station/id/:id", getStationById); // !Done (3 TODOs)
    routerV1.get("/station/all", getStations); // !Done (2 TODOs)

    routerV1.get("/train/all", getTrains); // *Done
    routerV1.get("/train/short/:id", getTrainByIdShort); // *Done
    routerV1.get("/train/full/:id", getTrainByIdFull); // *Done

    routerV1.get("/train/path/full/:id", getPathInfoFull);
    routerV1.get("/train/path/short/:id", getPathInfoShort); 

    // Station -> Stage -> Train-> Wagon 
    routerV1.post("/import/station/:filename", postImportStation); // *Done
    routerV1.post("/import/stage/:filename", postImportStage); // *Done
    routerV1.post("/import/wagon/:filename", postImportWagon); // *Done
    routerV1.post("/import/train/:filename", postImportTrain); // *Done

    app.use('/v1/', routerV1);
}