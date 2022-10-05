const Sequelize = require("sequelize");
//이름, 아이디, 패스워드, 소속대학, 학과, 이메일
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
        },
        password: {
          //암호화 진행
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        university: {
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
        modelName: "User", // 모델 이름을 설정, 노드 프로젝트에서 사용
        tableName: "users",
        paranoid: false,
        charset: "utf-8", //한글을 입력하기 위한 설정
        collate: "utf8_general_ci", //한글을 입력하기 위한 설정
      }
    );
  }
};
