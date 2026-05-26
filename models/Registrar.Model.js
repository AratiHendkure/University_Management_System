const mongoose = require('mongoose')

const passMatch = [/^ (\W + [\.-]?\w)*@\w+([\W])$/]

const registrarSchema = new mongoose.Schema({

    userName:{
        type:String,
        required:true,
        unique:true,
        maxLength:12
    },
    password:{
        type:String,
        required:true,
        match:[passMatch,"do not select any special character rather than @"]

    }

},{timestamps:true})

const Registrar = mongoose.model('Registrar', registrarSchema)

module.exports = Registrar
