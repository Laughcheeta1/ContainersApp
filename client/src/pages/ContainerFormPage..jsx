import { useForm } from "reack-hook-form";
import { useContainers } from "../context/ContainerContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ContainerFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createContainer } = useContainers();
  const { navigate } = useNavigate();
  const params = useParamms();
}
