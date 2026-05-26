const mongoose = require('mongoose')
const Registrar = require('./Registrar.Model')

const departmentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    depCode:{
        type:String,
        required:true,
        unique:true
    },
    stream:{
        type:String,
        required:true,
        enum:['Science and Technology','Humanitics','Medical']
    },
    courses:{
        type:String,
        required:true
    },
    establishedIn:{
        type:String,
        required:true
    },
    restisterdBy:{
        type:mongoose.Schema.Type.objectId,
        ref:"Registrar",
        required:true
    }
},{timestamps:true})

const Department = mongoose.model("Department", departmentSchema)
module.exports = Department