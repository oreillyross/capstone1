import { AddToCartParams } from "types";
import { apiFetch } from "./apiFetch";

export const addPlantToCart = ({ id, quantity, pot_color }: AddToCartParams) =>
  apiFetch("POST", `/cart/plants/${id}`, {
    quantity,
    pot_color,
  });
