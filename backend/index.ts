import server from "bunrest";
import { initApi } from "./api/api";
import cors from "buncors";

/**
 * Starts the server and listens on the specified port. 
 */
function main() {
    
    const port = process.env.PORT || 5051;
    
    const app = server();
    app.use(cors());
    initApi(app);
    
    app.listen(port, () => console.log("Listening on port:", port));
}

main();