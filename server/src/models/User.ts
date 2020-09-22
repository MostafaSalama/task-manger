import * as mongoose from 'mongoose';
import TaskSchema from "./Task";
import User from "../types/User";

const UserSchema = new mongoose.Schema<User>({
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
    },
    taskList:[TaskSchema]
},{
    versionKey:false,
    timestamps:true
})

const User = mongoose.model('User',UserSchema) ;

export default User ;
