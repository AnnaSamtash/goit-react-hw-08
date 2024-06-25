import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Stack from '@mui/material/Stack';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const ConfirmDialog = ({ open, onClose, onConfirm, name, id }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Confirm the deletion
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove the contact {name}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={2}>
          <Button autoFocus onClick={onClose} color="success">
            Undo
          </Button>
          <Button onClick={() => onConfirm(id)} color="error">
            Delete
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
