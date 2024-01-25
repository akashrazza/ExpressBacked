
const mongoose = require('mongoose');

async function connect(){
    try{
        
        await mongoose.connect("mongodb+srv://akashrazza:testRaja@cluster0.8gi7hza.mongodb.net/testDB?serverSelectionTimeoutMS=2000")
        console.log("Connecttion Created")
    }
    catch(err){
        console.log(err);
    }
}

module.exports={connect}
