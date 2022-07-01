import express from "express";
<<<<<<< HEAD
import { tranding, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";
=======
import { tranding } from "../controllers/videoController";
import { join } from "../controllers/userController";
>>>>>>> 0b6c784f95a6f8a893287bc963dc3ab063e69d19

const globalRouter = express.Router();

globalRouter.get("/", tranding);
globalRouter.get("/join", join);
<<<<<<< HEAD
globalRouter.get("/login", login);
globalRouter.get("/search", search);
=======
>>>>>>> 0b6c784f95a6f8a893287bc963dc3ab063e69d19

export default globalRouter;
