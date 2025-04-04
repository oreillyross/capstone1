const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;



export const apiFetch = (method: string, path: string, body: {} | null = null) => {
  const options: RequestInit = {
    method,
    credentials: "include",
    headers: {
      Authorization: "Bearer" + VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(VITE_API_BASE_URL + path, options);
};
