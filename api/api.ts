import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";

export function initApi(app: any) {
    const router_v1 = app.router();

    router_v1.get("/ping", (_req: BunRequest, res: BunResponse) => {
        const time = new Date();
        res.status(200).json({ message: "pong", time: time.toISOString() });
    });




    app.use('/v1/', router_v1);
}