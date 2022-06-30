import express from "express";
import { tranding } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", tranding);
globalRouter.get("/join", join);

export default globalRouter;
