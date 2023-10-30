const { z } = require("zod");

const createWorkSchema = z.object({
    version : z.number({
        required_error: "Version is required"
    }),
    id : z.string({
        required_error: "Id is required"
    }),
    name : z.string({
        required_error: "Name is required"
    }),
    username : z.string({
        required_error: "Username is required"
    }),
    password : z.string({
        required_error: "Password is required"
    }),
    Permissions : z.string({
        required_error: "Persmission is required"
    })
});

module.exports = createWorkSchema;