import { useState } from "react";
import { useConnection } from "../../../context";

export const useNavBar = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const { setSearchedName } = useConnection();
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const [openVerifyConnectionModal, setVerifyConnectionModal] = useState(false);
  const [openAllNetworkModal, setOpenAllNetworkModal] = useState(false);
  
  return {
    openAddModal,
    setOpenAddModal,
    setSearchedName,
    openConnectModal,
    setOpenConnectModal,
    openVerifyConnectionModal,
    setVerifyConnectionModal,
    openAllNetworkModal,
    setOpenAllNetworkModal
  }
}