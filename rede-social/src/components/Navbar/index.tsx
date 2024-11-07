import './styles.css';

export const Navbar = () => {
  return (
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
  )
}