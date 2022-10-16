import React from 'react'
import { Dialog, DialogActions, DialogTitle, Button, Typography } from '@mui/material'

export default function Confirm(props) {
  const { open, title, onClose, onConfirm } = props
  return (
    <Dialog
      open={open}
      onClose={ () => onClose() }
    >
      <DialogTitle >
        <Typography variant='h6'>
          {title || "Tem certeza que deseja excluir ?"}
        </Typography>
      </DialogTitle>
      <DialogActions className='justify-content-center mb-2'>
        <Button onClick={() => onClose()}>
          Não
        </Button>
        <Button 
          onClick={() => {
            onClose()
            onConfirm()
          }}
          variant="contained"
          color='primary'

        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  )
}
