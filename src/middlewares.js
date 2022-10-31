//토큰 유효성 검사
const jwt = require("jsonwebtoken");


const authToken = (req, res, next) =>{

    if(req.headers.authorization){
        let header = req.headers["authorization"]
        //Request의 header의 Authorization에서 토큰을 추출
        //AUthorization에서 'Bearer'가 포함되어 있으므로 split 사용!!
        let token = header && header.split("")[1]

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