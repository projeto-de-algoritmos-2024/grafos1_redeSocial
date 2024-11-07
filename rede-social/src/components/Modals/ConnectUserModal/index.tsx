import React, { useState } from 'react';
import { Modal, Box, Typography, Select, MenuItem, Button } from '@mui/material';
import { useConnection } from '../../../context';
import './styles.css';


interface ConnectUserModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConnectUserModal: React.FC<ConnectUserModalProps> = ({ open, onClose }) => {
    const { usersList, connectUsers } = useConnection();
    const [firstUser, setFirstUser] = useState('');
    const [secondUser, setSecondUser] = useState('');

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="profile-form-modal">
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
          Conectar Usuarios
        </Typography>
        <div className='select-container'>
            <Select
                className='select'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={firstUser}
                label="Age"
                onChange={(event) => {
                    console.log(event.target.value)
                    setFirstUser(event.target.value)
                }}
            >
                {usersList.map((user) => (
                    <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                ))}
                
            </Select>
            <div>
                x
            </div>
            <Select
                className='select'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={secondUser}
                label="Age"
                onChange={(event) => {
                    console.log(event.target.value)
                    setSecondUser(event.target.value)
                }}
            >
                {usersList.map((user) => (
                    <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                ))}

            </Select>
            
            <Button onClick={() => {
                    if (firstUser && secondUser)
                    {
                        connectUsers(firstUser, secondUser);
                        onClose(); 
                    }
                          
            }}   className='connect-button' type="submit" variant="contained" color="primary" fullWidth>
              Conectar
            </Button>
        </div>
      </Box>
    </Modal>
  );
};
