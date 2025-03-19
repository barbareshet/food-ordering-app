import {models, Schema} from "mongoose";

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
                new Error('Password must have at least 5 characters')
            }
        }
    }
})
export const User = models?.User || model('User', UserModel);