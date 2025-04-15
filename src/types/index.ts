type JwtPayload = {
  id: number,
  username: string,
  exp: number
}

export interface UserValues {
  username: string;
  password: string;
}

// Define the context's value type
export interface SessionContextValue {
  user: JwtPayload | null;
  signIn: (token: string | null) => void;
  signOut: () => void;
}
