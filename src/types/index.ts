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

export interface Plant {
  id: number,
  images: [{pot_color: string, src: string}],
  name: string,
  price: number
}
