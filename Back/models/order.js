const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({

    email:{
        type: String,
        required: true
    },

    items:[
        {
           _id: false,
           id: String,
           qty: Number, 
        },
    ],
})

module.exports= mongoose.model("order", orderSchema)