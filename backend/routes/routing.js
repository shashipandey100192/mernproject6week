const express = require('express');
const myapp = express.Router();
const myschima = require('../schimas/myschimatype');



myapp.get("/",(req,res)=>{
    res.send("welcome to expess jsooooooooooooooooooopppppppppppppppppp");
});

myapp.get("/about",(req,res)=>{
    res.send("welcome to about page");
});

myapp.get("/alluser", async(req,res)=>{
        const users = await myschima.find();
        console.log(users);
        res.json({datas:users,status:240,message:"all userlist"});
});





module.exports = myapp