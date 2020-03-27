const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views","view")

app.use(express.static(__dirname+'/public'));

var list = [{ name: 'Rajan',email: 'rajan.beis.16@acharya.ac.in',age: '12',mobile: '6361500245',address: '#6,7th Cross, Masjid Road, Soldevanahalli',state: 'KA' }];

app.get("/",(req,res,next)=>{
    res.render('index',{list:list});
})
app.post("/",(req,res,next)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    list.push(obj);
    res.redirect('/');
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server Listening on Port :', port);
});