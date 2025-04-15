import { createContext } from "react";
import type { SessionContextValue } from "types";

export const SessionContext = createContext<SessionContextValue>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});
