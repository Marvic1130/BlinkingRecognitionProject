const express = require("express");
const user = require("../controllers/userController");

// import express from "express";
// import { home } from "../controlers/userControler.js";
const userRouter = express.Router(); //라우터 생성


userRouter.get("/", user.home);
userRouter.post("/sJoin", user.studentJoin);
userRouter.post("/pJoin", user.professorJoin);
userRouter.get("/login" , user.getLogin);
userRouter.post("/login", user.login);
userRouter.get("/selectSignup" , user.getjoin);
userRouter.get("/studentSignup",user.getSjoin);
userRouter.get("/professorSignup",user.getPjoin);

// export default userRouter;
module.exports = userRouter;
