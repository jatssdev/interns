import { Router } from "express";
import { login, register, verifyToken } from "../controllers/userController.js";

export const UserRoute = Router();

UserRoute.route("/register").post(register);
UserRoute.route("/login").post(login);
UserRoute.route("/verify/:token").get(verifyToken);
