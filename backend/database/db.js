const mongoose = require('mongoose');

const db = process.env.DATABASEURL
const connecttodb = mongoose.connect(db).then(()=>{
    console.log("connect to db");
});


module.exports = connecttodb