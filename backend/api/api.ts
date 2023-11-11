import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { getStationCoordsById, getStationStages, getStations, getTrainById, getTrains, getTrainsByDestination, getTrainsByOrigin, postImportUploadTrain, postUploadDislocation, postUploadStage, postUploadStation } from "./handlers";
import { Router } from "bunrest/src/router/router";

/**
 * Initializes the API by setting up the routes.
 *
 * @param {BunServer} app - The bunrest server object.
 */
export function initApi(app: any) {
    const routerV1: Router = app.router();

    routerV1.get("/ping", (_req: BunRequest, res: BunResponse) => res.status(200).json({ message: "pong", time: new Date().toISOString() }));

    routerV1.get("/station/all", getStations)
    routerV1.get("/train/all", getTrains)

    routerV1.post("/station/coords", getStationCoordsById)
    routerV1.post("/station/stages", getStationStages)

    routerV1.post("/train/origin/", getTrainsByOrigin)
    routerV1.post("/train/destination/", getTrainsByDestination)
    routerV1.post("/train/id/", getTrainById)

    routerV1.post("/upload/dislocation/:filename", postUploadDislocation)
    routerV1.post("/upload/stage/:filename", postUploadStage)
    routerV1.post("/upload/station/:filename", postUploadStation)
    routerV1.post("/upload/train/:filename", postImportUploadTrain)


    app.use('/v1/', routerV1);
}