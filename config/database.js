import mongoose from "mongoose";

import { config } from "dotenv"
config()
export let database = () => {
    try {
        mongoose.connection.on("error", () => {
            console.log("error while connecting database")
        })

        mongoose.connection.on("connected", () => {
            console.log("database connected sucessfully")
        })

        mongoose.connect(process.env.Database)
    } catch (error) {
        console.log(error)
    }
}