const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.set("port" || process.env.PORT || 3000); // process.env.PORT 소스코드가 유출되었을 때 키의 보안성을 위해서 사용된다.

app.use(morgan("dev")); // 요청과 응답에 대한 정보를 콘솔에 기록한다.
app.use(express.json()); // 폼 데이터나 AJAX요청의 데이터를 처리하는데 사용
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HI");
});

app.listen(3000, () => {
  console.log("Port 3000 is opened");
});