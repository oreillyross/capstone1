import { POT_COLORS } from "utils";

type PotColor = keyof typeof POT_COLORS;

type JwtPayload = {
  id: number;
  username: string;
  exp: number;
};

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

export interface AddToCartParams {
  id: number;
  quantity: number;
  pot_color: string;
}

export interface ICartItem {
  id: number;
  image_src: string;
  plant_name: string;
  pot_color: string;
  price_per_unit: number;
  quantity: number;
}

export interface ISetCartOpen {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Plant {
  id: number;
  images: [{ pot_color: PotColor; src: string }];
  name: string;
  price: number;
  description: string;
  botanical_name: string;
}

export interface BenefitBoxProps {
  title: string;
  description: string;
  icon: string;
}
