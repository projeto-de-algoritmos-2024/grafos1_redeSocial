import { UserType } from '../../mocks/users'
import './styles.css'

export const UserCard = ({ user }: { user: UserType }) => {
  return (
    <div className="user-card" key={user.id}>
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