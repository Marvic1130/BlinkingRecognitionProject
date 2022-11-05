<<<<<<< HEAD
<<<<<<< HEAD
const { Op } = require("sequelize");
const Class = require("../models/Class");

module.exports.register = async (req, res) => {
  const { className, professor, department, classTime, place, people } =
    req.body;
  const { id } = req.user;
  console.log(id);

  try {
    await Class.create({
      className,
      professor,
      department,
      classTime,
      place,
      people,
      sClassId: id,
    });
    return res
      .json({ className, professor, department, classTime, place, people })
      .redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports.find = (req, res) => {
  //ui 변경 요청하기!!!!!
  const { keyword } = req.query;
  const item = Class.findAll({
    where: {
      [Op.or]: [
        {
          className: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          professor: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ],
    },
  });
  if (item.length === 0) {
    return res.status(401).json({ message: "일치하는 수업이 없습니다!" });
  }
};

//class등록했을때 user랑 연결되는지 확인!!!sㄴ
=======
=======
>>>>>>> 9f34dc5 (#2)
const { Op } = require("sequelize")
const Class = require("../models/Class");

module.exports.register = async(req, res) => {
    const { className, professor, department, classTime, place, people } = req.body;
    const {id} = req.user;
    console.log(id)

//classId로 변경하기!!
    try {
      await Class.create({
        className,
        professor,
        department,
        classTime,
        place,
        people,
        sclassId : id
      });
      return res.json({className, professor, department, classTime, place, people}).redirect("/")
    } catch (err) {
      console.log(err);};
}

module.exports.find = (req, res) => {
    //ui 변경 요청하기!!!!!
    const { keyword } = req.query
    const item = Class.findAll({
        where :{
            [Op.or]: [
                {
                    className :{
                        [Op.like] : `%${keyword}%`
                    }
                },
                {
                    professor : {
                        [Op.like] : `%${keyword}%`
                }
            }
            ]
        }
    })
    if(item.length === 0){
        return res.status(401).json({ message : "일치하는 수업이 없습니다!"})
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  //class등록했을때 user랑 연결되는지 확인!!!
>>>>>>> dce9d63 (class 등록, class 검색 기능 구현)
=======
  //class등록했을때 user랑 연결되는지 확인!!!sㄴ
>>>>>>> 3939b02 (#class 등록 api, 검색기능, token 유효성 검사)
=======
  //class등록했을때 user랑 연결되는지 확인!!!sㄴ
=======
const { Op } = require("sequelize");
const Class = require("../models/Class");

module.exports.register = async (req, res) => {
  const { className, professor, department, classTime, place, people } =
    req.body;
  const { id } = req.user;
  console.log(id);

  try {
    await Class.create({
      className,
      professor,
      department,
      classTime,
      place,
      people,
      sClassId: id,
    });
    return res
      .json({ className, professor, department, classTime, place, people })
      .redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports.find = (req, res) => {
  //ui 변경 요청하기!!!!!
  const { keyword } = req.query;
  const item = Class.findAll({
    where: {
      [Op.or]: [
        {
          className: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          professor: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ],
    },
  });
  if (item.length === 0) {
    return res.status(401).json({ message: "일치하는 수업이 없습니다!" });
  }
};

//class등록했을때 user랑 연결되는지 확인!!!sㄴ
>>>>>>> 0445ee5 (#토큰 유효성검사, 검색기능, class등록 api등록)
>>>>>>> 9f34dc5 (#2)
