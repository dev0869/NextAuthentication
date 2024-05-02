import { Message } from './../models/message.models';
import mongoose from "mongoose";
export async function dbConfig(){
try {
    await mongoose.connect(process.env.MONGO_URI!)

} catch (error:any) {
    console.log("error on Connecting Database",error);
    process.exit(1)
}
}