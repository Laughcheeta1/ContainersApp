const mongoose = require("mongoose");

const commodatumSchema = new mongoose.taskSchema(
    {
        version : {
            type : Number
        },
        commodatum_id : {
            type : String,
            required : true,
            unique : true,
            trime : true
        },
        container : {
            type : String,
            required : true
        },
        receiver : {
            type : receiverSchema,
            required : true
        },
        company : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            required : true
        },
        duration : {
            type : Number,
            required : true
        },
        signature : {
            type : String,
            required : true
        },
        action : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        transport_price : {
            type : Number,
            required : true
        },
        created_by : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true
    }
);


const receiverSchema = new mongoose.taskSchema(
    {
        id : {
            type : String,
            required : true,
        },
        name : {
            type : String,
            required : true
        },
        number : {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model("Commodatum", commodatumSchema);