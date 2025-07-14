const mongoose = require('mongoose');


const mydatapattern = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    cpass:{
        type:String
    }    
});


const datapattern = mongoose.model("user6week",mydatapattern);

module.exports = datapattern;