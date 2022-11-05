//토큰 유효성 검사
const jwt = require("jsonwebtoken");

<<<<<<< HEAD
<<<<<<< HEAD
const authToken = (req, res, next) => {
  if (req.headers.authorization) {
    let header = req.headers["authorization"];
    let token = header && header.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
      if (err) {
        res.status(404).json(err);
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Auth Error" });
  }
};

module.exports = authToken;
=======
=======
>>>>>>> 9f34dc5 (#2)

const authToken = (req, res, next) =>{

    if(req.headers.authorization){
        let header = req.headers["authorization"];
        let token = header && header.split(" ")[1]

        jwt.verify(token, process.env.ACCESS_SECRET, (err,user)=>{
            if(err) {
                res.status(404).json(err)
            }else{
                req.user = user;
                next();
            }
    })
    }else{
        res.status(401).json({error: "Auth Error"})
    }
}

module.exports = authToken
<<<<<<< HEAD
>>>>>>> 769b83b (token 유효성검사)
=======
=======
const authToken = (req, res, next) => {
  if (req.headers.authorization) {
    let header = req.headers["authorization"];
    let token = header && header.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
      if (err) {
        res.status(404).json(err);
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Auth Error" });
  }
};

module.exports = authToken;
>>>>>>> 0445ee5 (#토큰 유효성검사, 검색기능, class등록 api등록)
>>>>>>> 9f34dc5 (#2)
