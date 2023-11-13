import { useForm } from "react-hook-form";
import { useCustomers } from "../../context/CustomerContext";
import { useNavigate, useParams } from "react-router-dom";
import { customerSchema } from "../../schemas/customer";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";

import "../../styles/formPage.css";

export default function EditCustomerPage()
{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(customerSchema)
    });

    // const {  }

}