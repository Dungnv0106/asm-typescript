import express from "express";
import { Login, SignUp } from "../controllers/user";

const Router = express.Router();
Router.post("/SignUp", SignUp);
Router.post("/Signin", Login);
export default Router;
