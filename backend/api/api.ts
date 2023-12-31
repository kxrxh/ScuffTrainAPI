import { Router } from "bunrest/src/router/router";
import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { deleteTableDB, getTrains, getPathInfoFull, getStateOfMovingTrain, getStationById, getStations, getTrainByIdFull, getTrainByIdShort, getTrainsByTime, getWagonStationTime, postImportStage, postImportStation, postImportTrain, postImportWagon } from "./handlers";

/**
 * Initializes the API by setting up the routes.
 *
 * @param {BunServer} app - The bunrest server object.
 */
export function initApi(app: any) {
    const routerV1: Router = app.router();

    routerV1.get("/ping", (_req: BunRequest, res: BunResponse) => res.status(200).json({ message: "pong", time: new Date().toISOString() }));

    routerV1.get("/station/id/:id", getStationById);
    routerV1.get("/station/all", getStations);

    routerV1.get("/train/all", getTrains);
    routerV1.get("/train/all/:time", getTrainsByTime);
    routerV1.get("/train/short/:id/:time", getTrainByIdShort);
    routerV1.get("/train/is_moving/:id", getStateOfMovingTrain);
    routerV1.get("/train/last_station_time/:id", getWagonStationTime);
    routerV1.get("/train/full/:id/:time", getTrainByIdFull);

    routerV1.get("/train/path/full/:id/:time", getPathInfoFull);

    // Station -> Stage -> Train-> Wagon 
    routerV1.post("/import/station/:filename", postImportStation);
    routerV1.post("/import/stage/:filename", postImportStage);
    routerV1.post("/import/wagon/:filename", postImportWagon);
    routerV1.post("/import/train/:filename", postImportTrain);

    routerV1.delete("/delete/db_table/:table", deleteTableDB)


    app.use('/v1/', routerV1);
}