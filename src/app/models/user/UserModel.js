import {Schema} from "mongoose";

const UserModel = new Schema({
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
        validate: pass => {
            if (!pass?.length || !pass?.length > 5){

            }
        }
    }
})