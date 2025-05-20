import { apiFetch } from "./apiFetch";

export const getPlants = async () => await apiFetch("GET", "/plants");

export const getPlantById = async ({id}:{id: string}) => await apiFetch("GET", `/plants/${id}`)