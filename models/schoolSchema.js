const mongoose = require("mongoose")

const schoolSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    numOfStudents:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    Address:{
        gps:String,
        box:String
    },
    contact:{
        phone:String,
        fax:String,
        email:String
    }
},{
timestamps:true
}
)

const School= mongoose.model("school", schoolSchema)
module.exports= School;