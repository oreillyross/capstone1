import { apiFetch } from "./apiFetch";
import type { UserValues } from "../types";

export const createUser = async ({ username, password }: UserValues) => await apiFetch("POST", "/users", {
    username,
    password,
  });


