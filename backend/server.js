const express = require('express');
const myapp = express();

myapp.get("/",(req,res)=>{
    res.send("welcome to expess jsooooooooooooooooooopppppppppppppppppp");
});

myapp.listen(4500,()=>{
    console.log("app is runing");
});

