import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormDialogIsOpen } from '../../redux/modals/selectors';
import { fixContact } from '../../redux/contacts/operations';
import { closeFormDialogIsOpen } from '../../redux/modals/slice';
import toast from 'react-hot-toast';

export default function FormDialog({ name, number, id }) {
  const modalFormOpen = useSelector(selectFormDialogIsOpen);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeFormDialogIsOpen());
  const handleFix = info => {
    dispatch(fixContact(info))
      .unwrap()
      .then(() => {
        handleClose();
        toast.success('Contact fixed!');
      })
      .catch(() => {
        toast.error('Contact not fixed!! Please try again!');
      });
  };

  return (
    <Dialog
      open={modalFormOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: event => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          formJson.id = id;
          handleFix(formJson);
        },
      }}
    >
      <DialogTitle>Change form</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To change this contact, please enter your data in right field.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Name"
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          fullWidth
          variant="standard"
          defaultValue={name}
        />
        <TextField
          required
          margin="dense"
          id="number"
          name="number"
          label="Phone number"
          InputLabelProps={{
            shrink: true,
          }}
          type="tel"
          fullWidth
          defaultValue={number}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Fix</Button>
      </DialogActions>
    </Dialog>
  );
}
