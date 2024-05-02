import mongoose ,{Schema} from "mongoose";

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    isVerify:{
        type:Boolean,
        default:false
    },
    verifyCode:{
        type:String
    },
    verifyDate:{
        type:Date
    },
    isAcceptingMsg:{
        type:Boolean,
        default:true
    },
    messages:{
        type:Schema.Types.ObjectId,
        ref:"Message"
    }
})


export const User=mongoose.models.users || mongoose.model("users",userSchema)