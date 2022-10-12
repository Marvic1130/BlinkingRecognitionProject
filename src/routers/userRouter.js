const express = require("express");
const user = require("../controlers/userControler");

// import express from "express";
// import { home } from "../controlers/userControler.js";
const userRouter = express.Router();

userRouter.get("/", user.home);
userRouter.post("/sJoin", user.studentJoin);
userRouter.post("/pJoin", user.professorJoin);

// export default userRouter;
module.exports = userRouter;
