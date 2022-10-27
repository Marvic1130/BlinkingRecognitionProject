const bcrypt = require("bcrypt");
const Student = require("../models/Student");
const Professor = require("../models/Professor");
module.exports.home = (req, res) => {
  res.send("hello");
};
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
    res.redirect("/login");
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
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};

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
            name: userInfo1.name,
            id: userInfo1.id,
            pw: userInfo1.pw,
            sNum: userInfo1.sNum,
            college: userInfo1.college,
            department: userInfo1.department,
          },
          process.env.ACCESS_SECRET,
          {
            expiresIn: "1m",
            issuer: "jungseok",
          }
        );
        //refresh Token 발급
        const refreshToken = jwt.sign(
          {
            id: userInfo1.id,
            pw: userInfo1.pw,
            sNum: userInfo1.sNum,
            college: userInfo1.college,
            department: userInfo1.department,
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

        res.status(200).json("login success"); //토큰 보내기!
        console.log("Student Login");
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
            name: userInfo1.name,
            id: userInfo1.id,
            pw: userInfo1.pw,
            sNum: userInfo1.sNum,
            college: userInfo1.college,
            department: userInfo1.department,
          },
          process.env.ACCESS_SECRET,
          {
            expiresIn: "1m",
            issuer: "jungseok",
          }
        );
        //refresh Token 발급
        const refreshToken = jwt.sign(
          {
            id: userInfo1.id,
            pw: userInfo1.pw,
            sNum: userInfo1.sNum,
            college: userInfo1.college,
            department: userInfo1.department,
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

        res.status(200).json("login success"); //토큰 보내기!
        console.log("Professor Login");
      }
    } else {
      console.log("There is no user!!");
      res.sendStatus(400);
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
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};
