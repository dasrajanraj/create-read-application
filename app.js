const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views","view")

app.use(express.static(__dirname+'/public'));

app.get("/",(req,res,next)=>{
    res.render('index');
    console.log("This is testing page");
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server Listening on Port :', port);
});