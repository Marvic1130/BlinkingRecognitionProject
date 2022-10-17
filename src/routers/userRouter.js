const express = require("express");
const user = require("../controllers/userController");

// import express from "express";
// import { home } from "../controlers/userControler.js";
const userRouter = express.Router(); //라우터 생성

userRouter.get("/", user.home);
userRouter.post("/sJoin", user.studentJoin);
userRouter.post("/pJoin", user.professorJoin);

// export default userRouter;
module.exports = userRouter;
