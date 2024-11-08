import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

interface IToast {
  open: boolean;
  onClose: () => void;
  message: string;
  severity?: 'error' | 'info' | 'success' | 'warning';
  variant?: 	'filled' | 'outlined' | 'standard';
  vertical?: 'top' | 'bottom';
  horizontal?: 'center' | 'left' | 'right';
}

export const Toast: React.FC<IToast> = ({ 
  open, 
  onClose, 
  message, 
  severity = 'success', 
  variant = 'filled', 
  vertical = 'top', 
  horizontal = 'right' 
}) => {
  
  return (
    <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant={variant}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}