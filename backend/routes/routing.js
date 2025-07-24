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
    res.send({removedata:a,message:"remove successfully",status:370});
});


myapp.get("/singleuser/:id", async(req,res)=>{
    const id = req.params.id;
        const a = await myschima.findById({_id:id});
         res.send(a);

})


myapp.patch("/updateuser/:id", async(req,res)=>{
    const id = req.params.id;
        
        const a = await myschima.findByIdAndUpdate(id,req.body,{new:true});
        res.send({user:a,message:"update successfully",status:376});

});

myapp.post("/loginpage",async (req,res)=>{
    const {email,pass} = req.body;
    if(email==="" || pass==="")
    {
        res.send({msg:"email or password is blank",status:420});
    }
    else
    {
        const users = await myschima.findOne({email:email});
        if(users)
        {
            if(users.email===email && users.pass===pass)
            {
                res.send({msg:"user found successfully",status:450});
            }
            else
            {
                res.send({msg:"email and password don't match",status:460});
            }
            
        }
        else
        {
            res.send({msg:"user not found",status:302});
        }
    }
})








module.exports = myapp