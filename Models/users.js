const mongoose= require('mongoose');
const Schema=mongoose.Schema;


const UserSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        requied: true,
        uniquue: true

    },
     password:{
        type: String,
        required: true
    }
    
});


const UserModel =mongoose.model('user1',UserSchema);
module.exports= UserModel;
