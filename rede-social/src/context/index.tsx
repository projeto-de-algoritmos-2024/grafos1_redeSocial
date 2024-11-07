import { createContext, useContext } from "react";
import { Graph } from "../mocks/connections";
import { UserType } from "../mocks/users";

interface ConnectionContextProps {
  usersList: UserType[];
  graphState: Graph;
  addUser: (userData: UserType) => void;
  connectUsers: (userId1: number, userId2: number) => void;
  findConnectedUsers: (startUserId: number) => (UserType | undefined)[];

}

export const ConnectionContext = createContext<ConnectionContextProps>({} as ConnectionContextProps)

export function useConnection() {
  return useContext(ConnectionContext)
}