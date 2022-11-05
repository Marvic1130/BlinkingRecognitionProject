const express = require("express");
const classes = require("../controllers/classController");
const authToken = require("../middlewares");

const classRouter = express.Router(); //라우터 생성

<<<<<<< HEAD
<<<<<<< HEAD
//미들웨어 설정
classRouter.route("/register").all(authToken).post(classes.register);
classRouter.post("/find", classes.find);

=======
classRouter.post("/register", authToken, classes.register);
classRouter.post("/find", classes.find);

// export default userRouter;
>>>>>>> 769b83b (token 유효성검사)
=======
//미들웨어 설정
classRouter.route("/register").all(authToken).post(classes.register)
classRouter.post("/find", classes.find);

>>>>>>> dce9d63 (class 등록, class 검색 기능 구현)
module.exports = classRouter;
