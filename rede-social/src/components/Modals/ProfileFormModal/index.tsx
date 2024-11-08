import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, Avatar } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useConnection } from '../../../context';

interface ProfileFormData {
  photo: File | null;
  name: string;
  age: number;
  city: string;
  country: string;
}

interface ProfileFormModalProps {
  open: boolean;
  onClose: () => void;
}

export const ProfileFormModal: React.FC<ProfileFormModalProps> = ({ open, onClose }) => {
  const { handleSubmit, control, setValue, reset } = useForm<ProfileFormData>({
    defaultValues: {
      photo: null,
      name: '',
      age: 0,
      city: '',
      country: '',
    },
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const { addUser, setOpenToast, setToastMessage } = useConnection()

  const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
    addUser(data)
    setProfileImage(null)
    reset();
    setToastMessage(`Usuário ${data.name} adicionado com sucesso!`);
    onClose(); 
    setOpenToast(true);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setValue('photo', file);
    }
  };

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
          Adicionar Usuário
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar
              src={profileImage || undefined}
              sx={{ width: 64, height: 64, mr: 2 }}
            />
            <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
              Upload
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
            </Button>
          </Box>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome"
                fullWidth
                margin="normal"
                required
              />
            )}
          />
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Idade"
                type="number"
                fullWidth
                margin="normal"
                required
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cidade"
                fullWidth
                margin="normal"
                required
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="País"
                fullWidth
                margin="normal"
                required
              />
            )}
          />
          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Salvar
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
