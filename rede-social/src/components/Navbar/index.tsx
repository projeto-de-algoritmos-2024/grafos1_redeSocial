import { ProfileFormModal } from '../Modals/ProfileFormModal';
import { useNavBar } from './hooks/NavbarHook';
import './styles.css';
import { ConnectUserModal } from '../Modals/ConnectUserModal';

export const Navbar = () => {
  const {
    openAddModal,
    setOpenAddModal,
    setSearchedName,
    openConnectModal,
    setOpenConnectModal
  } = useNavBar();

  return (
    <header className="header">
      <div className="logo">
        <img src='./logo.png'/>
        Connectify
      </div>
      <div className="search-container">
        <input type="text" placeholder="Pesquisar usuário..." className="search-input" onChange={(e) => setSearchedName(e.target.value)}/>
      </div>
      <div className="action-buttons">
        <button className="action-btn" onClick={() => setOpenAddModal(true)}>Adicionar Usuário</button>
        <button className="action-btn" onClick={() => setOpenConnectModal(true)}>Conectar Usuários</button>
      </div>
      <ProfileFormModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
      />
      <ConnectUserModal
        open={openConnectModal}
        onClose={() => setOpenConnectModal(false)}
      />
    </header>
  )
}