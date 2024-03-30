import express from "express";
import { getMessages, sendMessage } from "../controllers/message_controller.js";
import { protectroutes } from "../middlewares/protect_routes.js";
const router = express.Router();

router.get("/:id", protectroutes, getMessages);
router.post("/send/:id", protectroutes, sendMessage);

export default router;
