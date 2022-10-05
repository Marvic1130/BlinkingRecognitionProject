const express = require("express");
const morgan = require('morgan');
const dotenv = require('dotenv');


dotenv.config();
const app = express();

app.set('port' || process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("HI");
})

app.listen(3000, ()=>{
    console.log("Port 3000 is opened");
})