const Student = require("../models/Student");
const Professor = require("../models/Professor");
module.exports.home = (req, res) => {
  res.send("hello");
};
//이름, 아이디, 패스워드, 소속대학, 학과, 학번
module.exports.studentJoin = async (req, res) => {
  const { id, pw, college, name, department, sNum } = req.body;
  try {
    await Student.create({
      //db 모델에 맞는 데이터 생성
      name,
      id,
      pw,
      sNum,
      college,
      department,
    });
    res.redirect("/login");
  } catch (err) {
    //err 확인 코드
    console.log(err);
  }
};
//이름, 아이디, 패스워드, 소속대학, 학과,사번
module.exports.professorJoin = async (req, res) => {
  const { id, pw, college, name, department, pNum } = req.body;
  try {
    await Professor.create({
      name,
      id,
      pw,
      pNum,
      college,
      department,
    });
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};
