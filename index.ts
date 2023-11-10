import server from "bunrest";

/**
 * Starts the server and listens on the specified port. 
 */
function main(): void {
    const port = process.env.PORT || 3000;

    const app = server();
    app.get('/', (req, res) => {
        res.status(200).json({ message: req.query });
    });

    app.listen(port, () => console.log("Listening on port:", port));
}

main();
