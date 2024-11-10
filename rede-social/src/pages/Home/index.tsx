
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { NetworkGraph } from '../../components/NetworkGraph';
import { Toast } from '../../components/Toasts';
import { UserCard } from '../../components/UserCard';
import { ID3Graph, useConnection } from '../../context';
import { UserType } from '../../mocks/users';
import './styles.css'
import { Avatar, MenuItem, Select } from '@mui/material';

export const Home = () => {
  const {
    filteredUsers,
    openToast,
    setOpenToast,
    toastMessage,
    getFullNetwork,
    graphState,
    usersList
   } = useConnection()
   const [data, setData] = useState<ID3Graph | undefined>(undefined)
    const [currentUser, setCurrentUser] = useState<UserType >()

    useEffect(() => {
      if (currentUser) {
        const network = getFullNetwork(currentUser.id)
        setData(network)
      }
    }, [currentUser, graphState, filteredUsers.length])
 
   return (
    <div className="app-container">
      <Navbar />

      <div className='row'>
        <div className="users-grid">
          {filteredUsers.map(user => (
            <UserCard user={user} key={user.id}/>
          ))}
        </div>
        <div className='users-grid'>
          <div className='graph-container'>
            <div>  
              <p>Selecione o usuário raiz</p>
              <Select
                className='select'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentUser?.name}
                label="Usuário 1"
                onChange={(event) => {
                    const selected = usersList.filter(user => user.name === event.target.value)[0]
                    setCurrentUser(selected)
                }}
              >
                {usersList.map((user) => (
                  <MenuItem key={user.id} value={user.name}>
                    <div className='menu-item'>
                      <Avatar
                        src={user.photo ?? undefined}
                        sx={{ width: 32, height: 32, mr: 2 }}
                      />
                      {user.name}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </div>
            <NetworkGraph 
              data={data}
            />
          </div>
        </div>
      </div>
      <Toast 
        open={openToast}
        message={toastMessage}
        onClose={() => setOpenToast(false)}
      />
    </div>
   );
}