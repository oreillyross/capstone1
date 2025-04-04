import {apiFetch} from "./apiFetch"

interface USER {
  username: string,
  password: string
}

const createUser = async ({username, password}: USER) => {
  const response = await apiFetch("POST", "/users", {
    username, password
  })
}