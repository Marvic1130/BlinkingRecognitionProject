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
const { Op } = require("sequelize")
const Class = require("../models/Class");

module.exports.register = async(req, res) => {
    console.log(req.user)
    const { className, professor, department, classTime, place, people } = req.body;
  
    try {
      await Class.create({
        className,
        professor,
        department,
        classTime,
        place,
        people,
        userId : req.user.userId
      });
      return res.json({userId , className, professor, department, classTime, place, people}).redirect("/")
    } catch (err) {
      console.log(err);};
}

module.exports.find = (req, res) => {
    //ui 변경 요청하기!!!!!
    const { keyword } = req.params
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

  //class등록했을때 user랑 연결되는지 확인!!!
>>>>>>> dce9d63 (class 등록, class 검색 기능 구현)
