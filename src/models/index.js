const Sequelize = require("sequelize");

// import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.json")[env];
const Student = require("./Student");
const Professor = require("./Professor");
<<<<<<< HEAD
<<<<<<< HEAD
const Class = require("./Class");
=======
const Class = require("./Class")
>>>>>>> 3939b02 (#class 등록 api, 검색기능, token 유효성 검사)
=======
const Class = require("./Class")
=======
const Class = require("./Class");
>>>>>>> 0445ee5 (#토큰 유효성검사, 검색기능, class등록 api등록)
>>>>>>> 9f34dc5 (#2)
// import config from ("../../config/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const db = {};

db.sequelize = sequelize;
db.Student = Student;
db.Professor = Professor;
db.Class = Class;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 3939b02 (#class 등록 api, 검색기능, token 유효성 검사)
=======

=======
>>>>>>> 0445ee5 (#토큰 유효성검사, 검색기능, class등록 api등록)
>>>>>>> 9f34dc5 (#2)

Student.init(sequelize);
Professor.init(sequelize);
Class.init(sequelize);

Student.associate(db);
Professor.associate(db);
Class.associate(db);

module.exports = db;
// export default db;
