const { z } = require("zod");

const createCommodatumSchema = z.object({
    version : z.number({
        required_error: "Commodatum version required"
    }),
    commodatum_id : z.string({
        required_error: "The commodatum_id is required"
    }),
    container : z.string({
        required_error: "The container is required"
    }),
    receiver : {
        id : z.string({
            required_error: "The "
        }),
        name : z.string({
            required_error: "The receiver name is required"
        }),
        number : z.string({
            required_error: "The receiver number is required"
        })
    },
    company : z.string({
        required_error: "The Company_NIT is required"
    }),
    date : z.string({
        required_error: "The starting date of the commodatum is required"
    }).datetime().optimal(),
    duration : z.string({
        required_error: "The duration of the contract is required"
    }),
    signature : z.string({
        required_error: "The signature is required"
    }),
    number : z.string(),
    action : z.string({
        required_error: "The commodatum action is required"
    }),
    price : z.string(),
    transport_price : z.string(),
    created_by : z.string()
});

modules.exports = createCommodatumSchema;