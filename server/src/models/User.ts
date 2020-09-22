import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
    },
    name : {
        type:String,
        trim:true
    },
    hashedPassword:{
        type:String,
        required:true
    },
    email: {
        type:String
    }

},{
    versionKey:false,
    timestamps:true
})

const User = mongoose.model('User',UserSchema) ;

export default User ; 
