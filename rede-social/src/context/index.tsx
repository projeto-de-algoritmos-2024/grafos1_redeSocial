import { createContext, useContext } from "react";
import { Graph } from "../mocks/connections";
import { UserType, AddUserType } from "../mocks/users";

interface ConnectionContextProps {
  usersList: UserType[];
  graphState: Graph;
  addUser: (userData: AddUserType) => void;
  deleteUser: (userId: number) => void;
  connectUsers: (userId1: number, userId2: number) => void;
  findConnectedUsers: (startUserId: number) => (UserType | undefined)[];
  setSearchedName: React.Dispatch<React.SetStateAction<string>>;
  filteredUsers: UserType[]
}

export const ConnectionContext = createContext<ConnectionContextProps>({} as ConnectionContextProps)

export function useConnection() {
  return useContext(ConnectionContext)
}