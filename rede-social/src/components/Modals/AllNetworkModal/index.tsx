import { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { NetworkGraph } from "../../NetworkGraph";
import { ID3Graph, useConnection } from "../../../context";

interface AllNetworkModalProps {
  open: boolean;
  onClose: () => void;
}

export const AllNetworkModal = ({
  open,
  onClose
}: AllNetworkModalProps) => {
  const { graphState, filteredUsers, getAllNodesNetwork } = useConnection()
  const [data, setData] = useState<ID3Graph | undefined>(undefined)

  useEffect(() => {
    const network = getAllNodesNetwork()
    setData(network)
  }, [graphState, filteredUsers.length])

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="profile-form-modal">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: window.innerWidth * 0.5,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Rede completa
        </Typography>
        <NetworkGraph 
          data={data}
        />
      </Box>
    </Modal>
  )
}