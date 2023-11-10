import server from "bunrest";
import { initApi } from "./api/api";

/**
 * Starts the server and listens on the specified port. 
 */
function main() {
    const port = process.env.PORT || 5051;

    const app = server();
    initApi(app);

    app.listen(port, () => console.log("Listening on port:", port));
}

main();
