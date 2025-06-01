

import express from "express";
import { deleteproject, getproject, sendproject } from "../controller/project.js";
import { processFileUpload } from "../middleware/multer.js";

export let projectroutes = express.Router()
projectroutes.route("/project/send").post(processFileUpload, sendproject)
projectroutes.route("/project/display").get(getproject)
projectroutes.route("/project/delete/:id").delete(deleteproject)


