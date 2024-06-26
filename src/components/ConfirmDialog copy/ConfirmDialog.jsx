import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectConfirmDialogIsOpen,
  selectContactFromModal,
} from '../../redux/modals/selectors';
import { closeConfirmDialog } from '../../redux/modals/slice';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

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

const ConfirmDialog = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectConfirmDialogIsOpen);
  const modalContact = useSelector(selectContactFromModal);

  const handleClose = () => dispatch(closeConfirmDialog());
  const handleDelete = () => {
    dispatch(deleteContact(modalContact.id))
      .unwrap()
      .then(() => {
        handleClose();
        toast.success('Contact deleted!');
      })
      .catch(() => {
        toast.error('Contact not deleted!! Please try again!');
      });
  };

  return (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
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
          <Button autoFocus onClick={handleClose} color="success">
            Undo
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
