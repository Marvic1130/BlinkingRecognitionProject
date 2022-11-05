//토큰 유효성 검사
const jwt = require("jsonwebtoken");

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
>>>>>>> 769b83b (token 유효성검사)
