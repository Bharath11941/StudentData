import express from "express";
import { addMultipleUser, addSingleUser, getUser } from "../controllers/userController.js";
const userRoute = express()

userRoute.post("/data",addMultipleUser)

userRoute.get("/data",getUser)


userRoute.patch('/data',addSingleUser)











export default userRoute