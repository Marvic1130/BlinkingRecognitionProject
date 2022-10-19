const Student = require("../models/Student");
const Professor = require("../models/Professor");
const express = require("express");
const jwt = require("jsonwebtoken");
const { STRING } = require("sequelize");
module.exports.home = (req, res) => {
  res.send("hello");
};

//이름, 아이디, 패스워드, 소속대학, 학과, 학번;
module.exports.studentJoin = async (req, res) => {
  const { name, id, pw, sNum, college, department } = req.body;
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
      // 데이터베이스 처리가 오래걸려서 다른 처리들을 빠르게 진핼하기 위해
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

module.exports.login = async (req, res, next) => {
  const { id, pw } = req.body;

  const userInfo1 = await Student.findOne({
    where: { id },
  });
  console.log(userInfo1);
  if (!userInfo1) {
    res.status(403).json("not Authorize");
  } else {
    console.log("hi");
    //access Token 발급
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

    res.status(200).json("login success");
  }
};
