import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";
import { get_station_coords_by_id, get_station_stages, get_stations, get_train_by_id, get_trains, get_trains_by_destination, get_trains_by_origin } from "./handlers";
import { Router } from "bunrest/src/router/router";

export function initApi(app: any) {
    const router_v1: Router = app.router();

    router_v1.get("/ping", (_req: BunRequest, res: BunResponse) => res.status(200).json({ message: "pong", time: new Date().toISOString() }));

    router_v1.get("/station/all", get_stations)
    router_v1.get("/train/all", get_trains)

    router_v1.post("/station/coords", get_station_coords_by_id)
    router_v1.post("/station/stages", get_station_stages)

    router_v1.post("/train/origin/", get_trains_by_origin)
    router_v1.post("/train/destination/", get_trains_by_destination)
    router_v1.post("/train/id/", get_train_by_id)



    app.use('/v1/', router_v1);
}