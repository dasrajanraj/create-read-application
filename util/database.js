const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback=>{
    MongoClient.connect('mongodb+srv://dasrajanraj:hd90lC9BJlqZitfb@cluster0-z6u3c.mongodb.net/test?retryWrites=true&w=majority',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
    .then(result =>{
        console.log("connected !");
        callback(result);
    })
    .catch(err =>{
        console.log("Error !!")
        console.log(err);
    })
}

module.exports = mongoConnect;



  