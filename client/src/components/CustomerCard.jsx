import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extends(utc);

export default function CustomerCard({ customer }) {
    return (
        <div className="resultado-busqueda">
            <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                {customer.name}
            </p>
            <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                {customer.phone}
            </p>
            <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                {customer.address}
            </p>
            <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                {customer.company_NIT}
            </p>
            <p className="text-sm">
                <span className="text-lg">Últ Mod:</span>{" "}
                {dayjs(customer.updatedAt).utc().format("DD/MM/YY")}
            </p>
        </div>
    );
}