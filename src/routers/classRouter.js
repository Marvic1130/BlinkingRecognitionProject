const express = require("express");
const classes = require("../controllers/classController");
const authToken = require("../middlewares");

const classRouter = express.Router(); //라우터 생성

//미들웨어 설정
classRouter.route("/register").all(authToken).post(classes.register);
classRouter.post("/find", classes.find);

module.exports = classRouter;
