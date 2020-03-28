const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const Users = require('./model/user');
const config = require('./util/database');


mongoose.connect(config.dbUrl);
mongoose.connection.on('connected',()=>{
    console.log("connected successfully");
})
mongoose.connection.on('error', err =>{
    console.log("connection error" , err);
})

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views","view")


app.use(express.static(__dirname+'/public'));


app.get("/",(req,res,next)=>{
    Users.getUser(function(err,result){
        if(err){
            console.log(err)
        }
        else{
        res.render('index',{list:result});
        }
    })
})

app.post("/",(req,res,next)=>{
    let user = Users({
        name:req.body.name,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        state: req.body.state,
        mobile: req.body.mobile
    })
    Users.addUser(user,function(err,result){
        if(err){
            console.log(err);
        }else{
            res.redirect('/')
        }
    })   
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Server listening on port: ",port);
});

