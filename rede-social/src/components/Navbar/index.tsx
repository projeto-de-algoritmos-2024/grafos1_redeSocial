import { ProfileFormModal } from '../Modals/ProfileFormModal';
import { useNavBar } from './hooks/NavbarHook';
import './styles.css';
import { ConnectUserModal } from '../Modals/ConnectUserModal';
import { Actions } from './components/Actions';
import { VerifyConnectionModal } from '../Modals/VerifyConnectionModal';
import { AllNetworkModal } from '../Modals/AllNetworkModal';

export const Navbar = () => {
  const {
    openAddModal,
    setOpenAddModal,
    setSearchedName,
    openConnectModal,
    setOpenConnectModal,
    openVerifyConnectionModal,
    setVerifyConnectionModal,
    openAllNetworkModal,
    setOpenAllNetworkModal
  } = useNavBar();

  const items = [
    {
      label: 'Adicionar usuário',
      onClick: () => setOpenAddModal(true)
    },
    {
      label: 'Conectar usuários',
      onClick: () => setOpenConnectModal(true)
    },
    {
      label: 'Rede completa',
      onClick: () => setOpenAllNetworkModal(true)
    },
    {
      label: 'Verificar conexão',
      onClick: () => setVerifyConnectionModal(true)
    }
  ]

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
        <Actions items={items} />
      </div>
      <ProfileFormModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
      />
      <ConnectUserModal
        open={openConnectModal}
        onClose={() => setOpenConnectModal(false)}
      />
      <VerifyConnectionModal 
        open={openVerifyConnectionModal}
        onClose={() => setVerifyConnectionModal(false)}
      />
      <AllNetworkModal 
        open={openAllNetworkModal}
        onClose={() => setOpenAllNetworkModal(false)}
      />
    </header>
  )
}