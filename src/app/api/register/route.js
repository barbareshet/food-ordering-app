import mongoose from "mongoose";
import {User} from "@/app/models/user/UserModel";

export async function POST(req){
    const body = await req.body;
    mongoose.connect(process.env.MONGO_URL)

    const newUser = await User.create(body);

    return Response.json(newUser);
}