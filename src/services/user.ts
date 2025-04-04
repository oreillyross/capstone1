import {apiFetch} from "./apiFetch"

interface USER {
  username: string,
  password: string
}

export const createUser = async ({username, password}: USER): Promise<void> => {
  const requestBody: USER = {
    username, password
  }
  const response = await apiFetch("POST", "/users", {
    requestBody
  })
}