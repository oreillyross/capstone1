import {POT_COLORS} from "pages/PlantListPage/PlantItem"

type PotColor = keyof typeof POT_COLORS

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
  images: [{pot_color: PotColor, src: string}],
  name: string,
  price: number,
  description: string,
  botanical_name: string,
}
