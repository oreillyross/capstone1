const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;
import * as user from "services/user"

export const apiFetch = (method: string, path: string, body: {} | null = null) => {
  const options: RequestInit = {
    method,
    credentials: "include",
    headers: {
      Authorization: "Bearer " + VITE_API_KEY,
      "Content-Type": "application/json",
    } as Record<string, string>,
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  const sessionToken = user.getSession()
  if (sessionToken) {
    (options.headers as Record<string, string>)["Capstone-Session"] = sessionToken
  }
  return fetch(VITE_API_BASE_URL + path, options);
};
