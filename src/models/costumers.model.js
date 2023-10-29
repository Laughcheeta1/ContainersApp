const mongoose = require("mongoose");

const costumersSchema = mongoose.Schema(
    {
        version : {
            type : Number,
            required : true
        },
        company_NIT : {
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        phone : {
            type : String,
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

module.exports = mongoose.model("Costumer", costumersSchema);