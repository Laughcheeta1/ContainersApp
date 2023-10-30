import { useEffect } from "react";
import { useContainers } from "../context/ContainerContext";
import ContainerCard from "../components/ContainerCard";

export default function ContainersPage() {
  const { getContainers } = useContainers();
  return <div>ContainersPage</div>;
}
