import { useState } from "react";
import { useConnection } from "../../../context";

export const useNavBar = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const { setSearchedName } = useConnection()
  
  return {
    openAddModal,
    setOpenAddModal,
    setSearchedName
  }
}