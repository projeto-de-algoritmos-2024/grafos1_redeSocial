
import { Navbar } from '../../components/Navbar';
import { UserCard } from '../../components/UserCard';
import { useConnection } from '../../context';
import './styles.css'

export const Home = () => {
  const {
    usersList
   } = useConnection()
 
   return (
    <div className="app-container">
      <Navbar />

      <div className="users-grid">
        {usersList.map(user => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
   );
}