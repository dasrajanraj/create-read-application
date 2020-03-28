const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const mongoConnect = require('./util/database');

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views","view")

app.use(express.static(__dirname+'/public'));
var list = [];


app.get("/",(req,res,next)=>{
    res.render('index',{list:list});
})

app.post("/",(req,res,next)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
    res.redirect('/')
    console.log(obj);
    list.push(obj);
   
})
const port = process.env.PORT || 3000;



mongoConnect(client =>{
    console.log(client);
    app.listen(3000);
});
