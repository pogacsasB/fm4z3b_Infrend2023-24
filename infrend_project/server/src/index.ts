import { AppDataSource } from "./data-source"
import express from "express";
import { getRouter } from "./routes";

async function main() {

    try {
        await AppDataSource.initialize();
        const app = express();
        app.use(express.json());
        app.use('/api', getRouter());
        app.listen(4200, () => {
            console.log('Listening on port 4200...')
        });
    } catch (err) {

        console.error(err);
    }
    
}

main();