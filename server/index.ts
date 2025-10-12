import express, {Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes";
import {errorHandler, notFoundHandler} from "./src/middleware";
import serverless from "serverless-http";

let dbInitialized = false;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins: string[] = [
    'http://localhost:5173',
    'https://v57-tier3-team-40.netlify.app',
    process.env.FRONTEND_URL
].filter((origin): origin is string => Boolean(origin));

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express.json());

app.use("/api", routes);

app.get("/", (_req: Request, res: Response) => {
    res.send("Server is running 🚀");
});

app.use(notFoundHandler);
app.use(errorHandler);

export default serverless(app);

// const startServer = async () => {
//     try {
//         await connectDatabase();
//         app.listen(PORT, () => {
//             console.log(`Server listening on http://localhost:${PORT}`);
//         });
//     } catch (error) {
//         console.error("Failed to start server:", error);
//         process.exit(1);
//     }
// };

// startServer();
