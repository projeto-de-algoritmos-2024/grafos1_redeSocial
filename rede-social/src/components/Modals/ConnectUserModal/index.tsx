import React, { useState } from 'react';
import { Modal, Box, Typography, Select, MenuItem, Button, Avatar } from '@mui/material';
import { useConnection } from '../../../context';
import './styles.css';
import { UserType } from '../../../mocks/users';

interface ConnectUserModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConnectUserModal: React.FC<ConnectUserModalProps> = ({ open, onClose }) => {
  const { usersList, connectUsers, setOpenToast, setToastMessage } = useConnection();
  const [firstUser, setFirstUser] = useState<UserType | null>(null);
  const [secondUser, setSecondUser] = useState<UserType | null>(null);

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
                        connectUsers(firstUser.id, secondUser.id);
                        setToastMessage(`Usuário ${firstUser.name} conectado ao ${secondUser.name} com sucesso!`);
                        onClose();
                        setFirstUser(null)
                        setSecondUser(null);
                        setOpenToast(true);
                    }
                          
            }}   className='connect-button' type="submit" variant="contained" color="primary" fullWidth>
              Conectar
            </Button>
        </div>
      </Box>
    </Modal>
  );
};
