import React, { useState } from 'react';
import { Modal, Box, Typography, Select, MenuItem, Button, Avatar } from '@mui/material';
import { useConnection } from '../../../context';
import './styles.css';
import { UserType } from '../../../mocks/users';

interface VerifyConnectionProps {
  open: boolean;
  onClose: () => void;
}

export const VerifyConnectionModal: React.FC<VerifyConnectionProps> = ({ open, onClose }) => {
  const { usersList, areUsersConnected } = useConnection();
  const [firstUser, setFirstUser] = useState<UserType | null>(null);
  const [secondUser, setSecondUser] = useState<UserType | null>(null);
  const [areConnected, setAreConnected] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const verifyFunction = (userId1: number, userId2: number) => {
    const connected = areUsersConnected(userId1, userId2);
    setAreConnected(connected);
    setShowResult(true);
  }

  return (
    <Modal 
      open={open} 
      onClose={() => {
        onClose();
        setShowResult(false);
      }} 
      aria-labelledby="profile-form-modal"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Verificar conexão
        </Typography>
        <div className='select-container'>
            <Select
                className='select'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={firstUser?.name}
                label="Usuário 1"
                onChange={(event) => {
                    const selected = usersList.filter(user => user.name === event.target.value)[0]
                    setFirstUser(selected)
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
            <div>
                x
            </div>
            <Select
                className='select'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={secondUser?.name}
                label="Usuário 2"
                onChange={(event) => {
                    const selected = usersList.filter(user => user.name === event.target.value)[0]
                    setSecondUser(selected)
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
            
            <Button onClick={() => {
                    if (firstUser && secondUser)
                    {
                        verifyFunction(firstUser.id, secondUser.id);
                    }
                          
            }}   className='connect-button' type="submit" variant="contained" color="primary" fullWidth>
              Verificar
            </Button>

            {showResult && (
              <div className='result-div'>
                <p>
                  {areConnected ? 'Usuários conectados' : 'Usuários não conectados'}
                </p>
              </div>
            )}
        </div>
      </Box>
    </Modal>
  );
};
