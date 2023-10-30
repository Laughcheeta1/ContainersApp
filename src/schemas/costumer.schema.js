const { z } = require("zod");

const createCostumerSchema = z.object({
    version : z.number({
        required_error: "Version is required"
    }),
    company_NIT: z.string({
        required_error: "Comapny_NIT is required"
    }),
    name : z.string({
        required_error: "Name of the company required"
    }),
    address : z.string({
        required_error: "Company address required"
    }),
    phone : z.string({
        required_error: "Company phone required"
    }),
    created_by : z.string({
        required_error: "Creator id required"
    })
});

module.exports = createCostumerSchema;