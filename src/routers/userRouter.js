const express = require("express");
const user = require("../controllers/userController");

// import express from "express";
// import { home } from "../controlers/userControler.js";
const userRouter = express.Router(); //라우터 생성

userRouter.get("/main", user.home);
userRouter.post("/sJoin", user.studentJoin);
userRouter.post("/pJoin", user.professorJoin);
userRouter.get("/", user.getLogin);
userRouter.post("/", user.login);
userRouter.get("/selectSignup", user.getJoin);
userRouter.get("/studentSignup", user.getSjoin);
userRouter.get("/professorSignup", user.getPjoin);
userRouter.get("/lectureEvaluation", user.getLectureEvaluation);

// export default userRouter;
module.exports = userRouter;
