import { apiFetch } from "./apiFetch";

export const getPlants = async () => await apiFetch("GET", "/plants");
