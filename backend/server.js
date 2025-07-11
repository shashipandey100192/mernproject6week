'Access-Control-Allow-Origin'
const express = require('express');
const cors = require('cors');
const myapp = express();
const myrouting = require('./routes/routing');

require('@dotenvx/dotenvx').config()
require('./database/db');
const myport = process.env.SERVERPORT || 9600




myapp.use(express.json());
myapp.use(cors());
myapp.use(myrouting);





myapp.listen(myport,()=>{
    console.log(`app is runing: ${myport}`);
});

