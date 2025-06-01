import express from "express";
import dotenv, { config } from "dotenv"
import { database } from "./config/database.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors"
import { projectroutes } from "./api/routes/project.js";
import { messagesroutes } from "./api/routes/messages.js";
// import { projectroutes } from "./routes/project.js";
// import { messagesroutes } from "./routes/messages.js";

config()
let startserver = () => {

    const app = express()

    app.use(express.json())
 


    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        credentials: true, // if you're using cookies or auth headers
    }));


    //   app.options("*", cors());


    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    app.use("/api", projectroutes);
    app.use("/api", messagesroutes);


    database()
    let port = process.env.PORT
    app.listen(port, () => {
        console.log(`server started at port ${port}`)
    })
}
startserver()