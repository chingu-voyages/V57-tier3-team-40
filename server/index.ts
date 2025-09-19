import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes";
import { errorHandler, notFoundHandler } from "./src/middleware";
import { connectDatabase } from "./src/config";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (_req: Request, res: Response) => {
    res.send("Server is running 🚀");
});

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
