import { AddToCartParams } from "types";
import { apiFetch } from "./apiFetch";

export const getCart = () => apiFetch("GET", "/cart")

export const addPlantToCart = ({ id, quantity, pot_color }: AddToCartParams) =>
  apiFetch("POST", `/cart/plants/${id}`, {
    quantity,
    pot_color,
  });
//TODO properly type this when you know the shape of the object
export const removePlantFromCart = ({itemId}: any) => apiFetch("DELETE", `/cart/${itemId}`)

