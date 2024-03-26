const mongoose = require('mongoose')    
const Position = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    long: {
        type: String
    },
    lat:{
        type: String
    }
}, { timestamps: true })
module.exports =  mongoose.model( 'positions' , Position)