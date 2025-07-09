const express = require('express');
const myapp = express.Router();



myapp.get("/",(req,res)=>{
    res.send("welcome to expess jsooooooooooooooooooopppppppppppppppppp");
});

myapp.get("/about",(req,res)=>{
    res.send("welcome to about page");
})


module.exports = myapp