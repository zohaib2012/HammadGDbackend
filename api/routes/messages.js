

import express from "express";
import { deletemessage, getmesages, sendmessages } from "../controller/messages.js";

export let messagesroutes = express.Router()
messagesroutes.route("/messages/send").post(sendmessages)
messagesroutes.route("/messages/display").get(getmesages)
messagesroutes.route("/messages/delete/:id").delete(deletemessage)


