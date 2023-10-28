const mongoose = require("mongoose");

const containerTypeSchema = new mongoose.Schema(
    {
        type_id : {
            type : String,
            required : true,
            unique : true
        },
        name : {
            type : String,
            required : true,
            unique : true
        },
        description : {
            type : String,
            default : ""
        },
        limitations : {
            type : String,
            default : ""
        },
        precautions : {
            type : String,
            default : ""
        }
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model("ContainerType", containerTypeSchema);