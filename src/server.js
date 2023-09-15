const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
const { sequelize } = require("./models");
<<<<<<< HEAD
const path = require("path");
const classRouter = require("./routers/classRouter");

=======
const path = require("path")

// import express from "express";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import sequelize from "../src/models/index.js";
// import userRouter from "./routers/userRouter.js";
>>>>>>> 8cdedcf (css, js 경로 설정 문제 해결)
dotenv.config();
const app = express();

app.set("port" || process.env.PORT || 3000); // process.env.PORT 소스코드가 유출되었을 때 키의 보안성을 위해서 사용된다.

app.use(morgan("dev")); // 요청과 응답에 대한 정보를 콘솔에 기록한다.
app.use(express.json()); // 폼 데이터나 AJAX요청의 데이터를 처리하는데 사용
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
app.use("/", userRouter);
<<<<<<< HEAD
app.use("/class", classRouter);

=======
>>>>>>> 8cdedcf (css, js 경로 설정 문제 해결)
=======
>>>>>>> 9ad8d56 (login 프론트 백 연결 완료)
app.use("/", express.static(path.join(__dirname + "../../")))
app.use("/", userRouter);
app.use("/selectSignup",userRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Port 3000 is opened");
});
