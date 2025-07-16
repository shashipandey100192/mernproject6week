'Access-Control-Allow-Origin'
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
        // res.json({datas:users,status:240,message:"all userlist"});
         res.json(users);
});

myapp.post("/registoruser", async (req,res)=>{
    const {fullname,email,pass,cpass} = req.body;
        const postdata = await myschima({fullname,email,pass,cpass}).save();
        res.send({data:postdata,status:245});
}) ;

myapp.delete("/deletedata/:id", async(req,res)=>{
        const id = req.params.id
    const a = await myschima.findByIdAndDelete({_id:id});
    res.send(200,{removedata:a,message:"remove successfully"});
});


myapp.get("/singleuser/:id", async(req,res)=>{
    const id = req.params.id;
        const a = await myschima.findById({_id:id});
         res.send(200,{removedata:a,message:" get single user successfully"});

})





module.exports = myapp