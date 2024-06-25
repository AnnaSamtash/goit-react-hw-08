import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({
  open,
  onClose,
  onSubmit,
  name,
  number,
  id,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit: event => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          formJson.id = id;
          onSubmit(formJson);
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
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Fix</Button>
      </DialogActions>
    </Dialog>
  );
}
