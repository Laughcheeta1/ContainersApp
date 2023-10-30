const { z } = require("zod");

const createItemsSchema = z.object({
    version : z.string({
        required_error: "Version is required"
    }),
    name : z.string({
        required_error: "Name is required"
    }),
    brand : z.string({
        required_error: "Brand is required"
    }),
    total_quantity : z.int({
        required_error: "The total quantity is required"
    }),
    available_quantity : z.int({
        required_error: "Available quantity is required"
    })
});

module.exports = createItemsSchema;