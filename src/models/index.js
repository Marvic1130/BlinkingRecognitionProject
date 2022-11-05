const Sequelize = require("sequelize");

// import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.json")[env];
const Student = require("./Student");
const Professor = require("./Professor");
<<<<<<< HEAD
const Class = require("./Class");
=======
const Class = require("./Class")
>>>>>>> 3939b02 (#class 등록 api, 검색기능, token 유효성 검사)
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
=======

>>>>>>> 3939b02 (#class 등록 api, 검색기능, token 유효성 검사)

Student.init(sequelize);
Professor.init(sequelize);
Class.init(sequelize);

Student.associate(db);
Professor.associate(db);
Class.associate(db);

module.exports = db;
// export default db;
