import { createContext, useContext } from "react";
import { Graph } from "../mocks/connections";
import { UserType, AddUserType } from "../mocks/users";

export interface ID3Graph {
  nodes: {
    id: string;
  }[];
  links: {
    source: string;
    target: string;
  }[];
}

interface ConnectionContextProps {
  usersList: UserType[];
  graphState: Graph;
  addUser: (userData: AddUserType) => void;
  deleteUser: (userId: number, userName: string) => void;
  connectUsers: (user1: number, user2: number) => void;
  findConnectedUsers: (startUserId: number) => (UserType | undefined)[];
  setSearchedName: React.Dispatch<React.SetStateAction<string>>;
  filteredUsers: UserType[];
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>
  toastMessage: string;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
  getFullNetwork(user: number): ID3Graph;
  suggestConnections(user: number, graph: Graph): number[];
  areUsersConnected(user1: number, user2: number): boolean;
  getAllNodesNetwork(): ID3Graph;
}

export const ConnectionContext = createContext<ConnectionContextProps>({} as ConnectionContextProps)

export function useConnection() {
  return useContext(ConnectionContext)
}