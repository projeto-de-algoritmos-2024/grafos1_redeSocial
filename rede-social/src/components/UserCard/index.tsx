import { UserType } from '../../mocks/users'
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css'
import { useConnection } from '../../context';

export const UserCard = ({ user }: { user: UserType }) => {
  const { deleteUser } = useConnection()

  return (
    <div className="user-card" key={user.id}>
      <div className="trash-icon">
        <button onClick={() => deleteUser(user.id, user.name)}>
          <DeleteIcon />
        </button>
      </div>
      {user.photo ? (
        <img src={user.photo} alt={user.name} className="user-photo" />
      ) : (
        <img src={'./no-photo.jpeg'} alt={user.name} className="user-photo" />
      )}
      <h3 className="user-name">{user.name}</h3>
      <p className="user-details">
        Idade: {user.age} <br />
        Localização: {user.city}, {user.country}
      </p>
    </div>
  )
}