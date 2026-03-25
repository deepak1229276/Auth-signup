const mongoose= require('mongoose');
const mongo_url=process.env.MONGO_CONN;

mongoose.connect(mongo_url).then(()=>{
    console.log("db is connectd is running")
}).catch((err)=>{
    console.log("this is the error",err)
})