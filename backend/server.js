const express = require('express');
const cors = require('cors');
const myapp = express();
require('dotenv').config();
const myport = process.env.SERVERPORT || 9600

myapp.get("/",(req,res)=>{
    res.send("welcome to expess jsooooooooooooooooooopppppppppppppppppp");
});

myapp.listen(myport,()=>{
    console.log(`app is runing: ${myport}`);
});

