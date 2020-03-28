const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require: true
    },
    age:{
        type:Number,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    state:{
        type: String,
        require:true
    },
    mobile:{
        type: Number,
        require:true
    }
});

var Users  = mongoose.model('Users',userSchema);

//save to databsae
Users.addUser = function(user, cb){
    user.save((err, result)=>{
        if(err){
            return cb("failed to load", null);
        }else{
            return cb(null,'user added');
        }
    })
}

//get data
Users.getUser = function(cb){
    Users.find((err,result)=>{
        if(err){
            return cb("failed to read data",null)
        }
        else{
            return cb(null,result)
        }
    });
}

module.exports = Users;