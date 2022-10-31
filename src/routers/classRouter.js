const express = require("express");
const classes = require("../controllers/classController");
const authToken = require("../middlewares");

const classRouter = express.Router(); //라우터 생성

classRouter.post("/register", authToken, classes.register);
classRouter.post("/find", classes.find);

// export default userRouter;
module.exports = classRouter;
