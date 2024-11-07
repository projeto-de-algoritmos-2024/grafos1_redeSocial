import { ReactNode, useEffect, useState } from "react"
import { graph } from "../mocks/connections"
import { users, AddUserType } from "../mocks/users";
import { ConnectionContext } from "../context";


export const ConnectionProvider = ({ children }: { children: ReactNode }) => {
  const [usersList, setUsersList] = useState(users);
  const [graphState, setGraphState] = useState(graph);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
    const newUsers = usersList.filter(user => user.name.includes(searchedName));
    setFilteredUsers(newUsers)
    console.log(graphState)
  }, [searchedName])

  const addUser = (userData: AddUserType) => {
    setUsersList(prevUsers => [...prevUsers, {
      ...userData,
      id: usersList.length + 1,
      photo: userData.photo ? URL.createObjectURL(userData.photo) : './no-photo.jpeg'
    }]);

    setFilteredUsers(prevUsers => [...prevUsers, {
      ...userData,
      id: usersList.length + 1,
      photo: userData.photo ? URL.createObjectURL(userData.photo) : './no-photo.jpeg'
    }]);
    
    setGraphState(prevGraph => ({
      ...prevGraph,
      [usersList.length + 1]: [],
    }));
  };

  function removeUserFromGraph(userId: number): void {

    setGraphState(prev => {
      delete prev[userId]

      for (const [id, connections] of Object.entries(prev)) {
        prev[Number(id)] = connections.filter(connection => connection !== userId);
      }

      return prev
    }) 
  }

  const deleteUser = (userId: number) => {
    setUsersList(prev => [...prev.filter(item => item.id !== userId)])
    setFilteredUsers(prev => [...prev.filter(item => item.id !== userId)])

    removeUserFromGraph(userId)
  }

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

  

  return (
    <ConnectionContext.Provider 
      value={{
        addUser,
        deleteUser,
        connectUsers,
        findConnectedUsers,
        usersList,
        filteredUsers,
        graphState,
        setSearchedName
      }}
    >
      {children}
    </ConnectionContext.Provider>
  )
}