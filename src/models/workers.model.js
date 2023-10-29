const mongoose = require("mongoose");

const workersSchema = new mongoose.Schema(
    {
        version : {
            type : String,
            required : true
        },
        id : {
            type : String,
            required : true,
            unique : true,
            trim : true
        },
        name : {
            type : String,
            required : true,
            trim : true
        },
        username : {
            type : String,
            required : true,
            unique : true,
            trim : true
        },
        password : {
            type : String,
            required : true
        },
        permission : {
            type : String,
            required : true
        },
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model("Worker", workersSchema);