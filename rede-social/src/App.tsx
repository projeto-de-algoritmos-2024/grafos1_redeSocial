import { useAppHook } from './hooks';
import './App.css'

function App() {
   const {
    usersList
   } = useAppHook()
 
   return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src='./logo.png'/>
          Connectify
        </div>
        <div className="search-container">
          <input type="text" placeholder="Pesquisar usuário..." className="search-input" />
        </div>
        <div className="action-buttons">
          <button className="action-btn" onClick={() => {}}>Adicionar Usuário</button>
          <button className="action-btn" onClick={() => {}}>Conectar Usuários</button>
        </div>
      </header>

      <div className="users-grid">
        {usersList.map(user => (
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
        ))}
      </div>
    </div>
   );
}

export default App
