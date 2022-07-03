import express, { application, NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";

var cors = require('cors')
const app = express();
app.use(cors());
var corsOptions = {
    origin: 'http://192.168.0.61:3001/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
}
);

app.listen(3000, () => console.log("Server is Running"));