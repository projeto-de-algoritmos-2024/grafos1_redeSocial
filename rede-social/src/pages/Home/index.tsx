
import { Navbar } from '../../components/Navbar';
import { UserCard } from '../../components/UserCard';
import { useConnection } from '../../context';
import './styles.css'

export const Home = () => {
  const {
    filteredUsers
   } = useConnection()
 
   return (
    <div className="app-container">
      <Navbar />

      <div className="users-grid">
        {filteredUsers.map(user => (
          <UserCard user={user} key={user.id}/>
        ))}
      </div>
    </div>
   );
}