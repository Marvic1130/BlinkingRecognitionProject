const bcrypt = require("bcrypt");
const path = require("path");
const Student = require("../models/Student");
const Professor = require("../models/Professor");
<<<<<<< HEAD
<<<<<<< HEAD
const jwt = require("jsonwebtoken");
=======

>>>>>>> 8cdedcf (css, js 경로 설정 문제 해결)
=======
const jwt = require("jsonwebtoken");
>>>>>>> 9ad8d56 (login 프론트 백 연결 완료)


module.exports.home = (req, res) => {
  return res.send("hello");
};

<<<<<<< HEAD


=======
>>>>>>> 9ad8d56 (login 프론트 백 연결 완료)
//이름, 아이디, 패스워드, 소속대학, 학과, 학번
module.exports.studentJoin = async (req, res) => {
  const { id, pw, college, name, department, sNum } = req.body;
  const encryption = bcrypt.hashSync(pw, 5);

  try {
    await Student.create({
      //db 모델에 맞는 데이터 생성
      name,
      id,
      pw: encryption,
      sNum,
      college,
      department,
    });
    return res.redirect("/login");
  } catch (err) {
    //err 확인 코드
    console.log(err);
  }
};
//이름, 아이디, 패스워드, 소속대학, 학과,사번
module.exports.professorJoin = async (req, res) => {
  const { id, pw, college, name, department, pNum } = req.body;

  const encryption = bcrypt.hashSync(pw, 5);
  try {
    await Professor.create({
      name,
      id,
      pw: encryption,
      pNum,
      college,
      department,
    });
    return res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};

module.exports.getLogin = async(req, res) =>{
  return res.sendFile(path.join(__dirname + '../../../front/login.html'));
}

module.exports.getSjoin = async(req, res) =>{
  res.sendFile(path.join(__dirname + '../../../front/studentSignup.html'));
}
module.exports.getPjoin=async(req,res)=>{
  res.sendFile(path.join(__dirname + '../../../front/professorSignup.html'));
}
module.exports.getjoin=async(req,res)=>{
  res.sendFile(path.join(__dirname + '../../../front/selectSignup.html'));
}

module.exports.login = async (req, res) => {
  const { id, pw, name } = req.body;
  try {
    const pUserInfo = await Professor.findOne({ where: { id } });
    const sUserInfo = await Student.findOne({ where: { id } });

    if (sUserInfo) {
      const pwCorrect = await bcrypt.compare(pw, sUserInfo.pw);
      console.log(pwCorrect, pw, sUserInfo.pw);
      if (!pwCorrect) {
        console.log("Password is wrong!");
        res.sendStatus(400);
      } else {
        const accessToken = jwt.sign(
          {
            name: sUserInfo.name,
            id: sUserInfo.id,
            pw: sUserInfo.pw,
            sNum: sUserInfo.sNum,
            college: sUserInfo.college,
            department: sUserInfo.department,
          },
          process.env.ACCESS_SECRET,
          {
            expiresIn: "10m",
            issuer: "jungseok",
          }
        );
        //refresh Token 발급
        const refreshToken = jwt.sign(
          {
            id: sUserInfo.id,
            pw: sUserInfo.pw,
            sNum: sUserInfo.sNum,
            college: sUserInfo.college,
            department: sUserInfo.department,
          },
          process.env.REFRESH_SECRET,
          {
            expiresIn: "24h",
            issuer: "jungseok",
          }
        );
        //token 전송
        res.cookie("accessToken", accessToken),
          {
            secure: false,
            httpOnly: true,
          };
        res.cookie("refreshToken", refreshToken),
          {
            secure: false,
            httpOnly: true,
          };

<<<<<<< HEAD
=======
        // res.status(200).json("login success"); //토큰 보내기!
        res.sendFile(path.join(__dirname + '../../../front/classStudent.html'));
>>>>>>> 111f42d (프론트 - 강의평가 페이지)
        console.log("Student Login");
        return res.status(200).json("login success"); //토큰 보내기!
      }
    } else if (pUserInfo) {
      const pwCorrect = await bcrypt.compare(pw, pUserInfo.pw);
      console.log(pwCorrect, pw, pUserInfo.pw);
      if (!pwCorrect) {
        console.log("Password is wrong!");
        res.sendStatus(400);
      } else {
        const accessToken = jwt.sign(
          {
            name: pUserInfo.name,
            id: pUserInfo.id,
            pw: pUserInfo.pw,
            sNum: pUserInfo.sNum,
            college: pUserInfo.college,
            department: pUserInfo.department,
          },
          process.env.ACCESS_SECRET,
          {
            expiresIn: "10m",
            issuer: "jungseok",
          }
        );
        //refresh Token 발급
        const refreshToken = jwt.sign(
          {
            id: pUserInfo.id,
            pw: pUserInfo.pw,
            sNum: pUserInfo.sNum,
            college: pUserInfo.college,
            department: pUserInfo.department,
          },
          process.env.REFRESH_SECRET,
          {
            expiresIn: "24h",
            issuer: "jungseok",
          }
        );
        //token 전송
        res.cookie("accessToken", accessToken),
          {
            secure: false,
            httpOnly: true,
          };
        res.cookie("refreshToken", refreshToken),
          {
            secure: false,
            httpOnly: true,
          };

<<<<<<< HEAD
=======
        // res.status(200).json("login success"); //토큰 보내기!
        res.sendFile(path.join(__dirname + '../../../front/classProfessor.html'));
>>>>>>> 111f42d (프론트 - 강의평가 페이지)
        console.log("Professor Login");
        return res.status(200).json("login success"); //토큰 보내기!
      }
    } else {
      console.log("There is no user!!");
      return res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.logout = async (req, res) => {
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
    return res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};

