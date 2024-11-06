import {  useState } from "react"
import { graph } from "../mocks/connections"
import { users, UserType } from "../mocks/users";

export const useAppHook = () => {
  const [usersList, setUsersList] = useState(users);
  const [graphState, setGraphState] = useState(graph);

  const addUser = (userData: UserType) => {
    setUsersList(prevUsers => [...prevUsers, userData]);
    
    setGraphState(prevGraph => ({
      ...prevGraph,
      [userData.id]: [],
    }));
  };

  const connectUsers = (userId1: number, userId2: number) => {
    setGraphState(prevGraph => {
      const newGraph = { ...prevGraph };

      if (!newGraph[userId1].includes(userId2)) {
        newGraph[userId1] = [...newGraph[userId1], userId2];
      }
      if (!newGraph[userId2].includes(userId1)) {
        newGraph[userId2] = [...newGraph[userId2], userId1];
      }

      return newGraph;
    });
  };

  const findConnectedUsers = (startUserId: number) => {
    const visited = new Set();
    const queue = [startUserId];
    visited.add(startUserId);

    while (queue.length > 0) {
      const currentUserId: number | undefined = queue.shift();
      if (currentUserId) {
        const connections = graphState[currentUserId];
        connections.forEach((connectionId: number) => {
          if (!visited.has(connectionId)) {
            visited.add(connectionId);
            queue.push(connectionId);
          }
        });
      }

    }

    return Array.from(visited).map(id => usersList.find(user => user.id === id));
  };

  return {
    addUser,
    connectUsers,
    findConnectedUsers,
    usersList
  }
}