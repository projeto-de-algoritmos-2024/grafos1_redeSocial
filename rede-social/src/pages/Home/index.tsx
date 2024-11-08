
import { Navbar } from '../../components/Navbar';
import { Toast } from '../../components/Toasts';
import { UserCard } from '../../components/UserCard';
import { useConnection } from '../../context';
import './styles.css'

export const Home = () => {
  const {
    filteredUsers,
    openToast,
    setOpenToast,
    toastMessage
   } = useConnection()
 
   return (
    <div className="app-container">
      <Navbar />

      <div className="users-grid">
        {filteredUsers.map(user => (
          <UserCard user={user} key={user.id}/>
        ))}
      </div>
      <Toast 
        open={openToast}
        message={toastMessage}
        onClose={() => setOpenToast(false)}
      />
    </div>
   );
}