import express from "express";
import { protectroutes } from "../middlewares/protect_routes.js";
import { getUsersforSideBar } from "../controllers/user_controllers.js";

const router = express.Router();
router.post("/", protectroutes, getUsersforSideBar);
export default router;
