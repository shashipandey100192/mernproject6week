const mongoose = require('mongoose');


const mydatapattern = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    dob:{
        type:String
    },
    phoneno:{
        type:String
    },
    pass:{
        type:String
    },
    role:{
        type:String
    }    
});


const datapattern = mongoose.model("user6week",mydatapattern);

module.exports = datapattern;