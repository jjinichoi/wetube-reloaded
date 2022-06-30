import express from "express";
import { watch, Edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", Edit);

export default videoRouter;
