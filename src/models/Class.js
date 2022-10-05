//수업명 , 교수, 학과, 수업시간, 장소, 인원수
const Sequelize = require("sequelize");
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        className: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        professor: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        department: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        classTime: {},
        place: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        people: {
          type: Sequelize.INTEGER(50),
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
