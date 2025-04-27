import { apiFetch } from "./apiFetch";
import type { UserValues } from "types";

export const createUser = async ({ username, password }: UserValues) => await apiFetch("POST", "/users", {
    username,
    password,
  });

export const createSession = async ({username, password}: UserValues) => {
    return await apiFetch("POST", "/users/session", {
        username,
        password
    })
}

const CAPSTONE_SESSION_TOKEN = "capstone_session"

export const storeSession = (capstoneSessionToken: string | null) => {
    localStorage.setItem(CAPSTONE_SESSION_TOKEN, capstoneSessionToken ?? "")
}

export const getSession = () => localStorage.getItem(CAPSTONE_SESSION_TOKEN)

export const removeSession = () => localStorage.removeItem(CAPSTONE_SESSION_TOKEN)


 

