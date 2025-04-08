import { apiFetch } from "./apiFetch";
import type { UserValues } from "types";

export const createUser = async ({ username, password }: UserValues) => await apiFetch("POST", "/users", {
    username,
    password,
  });

export const createSession = async ({username, password}: UserValues) => {
    console.log(username, password)
    return await apiFetch("POST", "/users/session", {
        username,
        password
    })
}


