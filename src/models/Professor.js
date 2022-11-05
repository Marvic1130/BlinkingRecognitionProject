const Sequelize = require("sequelize");
//이름, 아이디, 패스워드, 소속대학, 학과, 사번
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        id: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
          primaryKey: true,
        },
        pw: {
          //암호화 진행
          type: Sequelize.STRING,
          allowNull: false,
        },
        pNum: {
          type: Sequelize.INTEGER(50),
          allowNull: false,
        },
        college: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        department: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Professor", // 모델 이름을 설정, 노드 프로젝트에서 사용
        tableName: "Professor",
        paranoid: false,
        charset: "utf8", //한글을 입력하기 위한 설정
        collate: "utf8_general_ci", //한글을 입력하기 위한 설정
      }
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
  static associate(db) {
    db.Professor.hasMany(db.Class, { foreignKey: "pClassId", sourceKey: "id" });
=======
=======
>>>>>>> 9f34dc5 (#2)
  static associate(db){
<<<<<<< HEAD
    db.Professor.hasMany(db.Class, {foreignKey : pClassId, sourceKey: id});
>>>>>>> b1aac22 (database 재설정 및 database 간의 관계설정)
=======
    db.Professor.hasMany(db.Class, {foreignKey : "pClassId", sourceKey: "id"});
<<<<<<< HEAD
>>>>>>> 3939b02 (#class 등록 api, 검색기능, token 유효성 검사)
=======
=======
  static associate(db) {
    db.Professor.hasMany(db.Class, { foreignKey: "pClassId", sourceKey: "id" });
>>>>>>> 0445ee5 (#토큰 유효성검사, 검색기능, class등록 api등록)
>>>>>>> 9f34dc5 (#2)
  }
};
