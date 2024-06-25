import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact, fixContact } from '../../redux/contacts/operations';
import Button from '../Button/Button';

import { MdDeleteForever } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog copy/ConfirmDialog';
import FormDialog from '../FormDialog/FormDialog';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleDelete = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        setOpen(false);
        toast.success('Contact deleted!');
      })
      .catch(() => {
        toast.error('Contact not deleted!! Please try again!');
      });
  };

  const handleFix = info => {
    dispatch(fixContact(info))
      .unwrap()
      .then(() => {
        setOpenForm(false);
        toast.success('Contact fixed!');
      })
      .catch(() => {
        toast.error('Contact not fixed!! Please try again!');
      });
  };

  return (
    <div>
      <div className={css.contact_container}>
        <div className={css.contact_descr}>
          <p className={css.contact_descr_name}>
            <IoPersonSharp size={16} className={css.contact_descr_icon} />
            {name}
          </p>
          <p className={css.contact_descr_number}>
            <FaPhoneAlt size={16} className={css.contact_descr_icon} />
            {number}
          </p>
        </div>
        <div className={css.btn_container}>
          <Button
            onClick={() => setOpenForm(true)}
            style={{ margin: 0, backgroundColor: '#4eb94ee2' }}
          >
            <FaPencilAlt size={32} />
          </Button>
          <Button onClick={() => setOpen(true)} style={{ margin: 0 }}>
            <MdDeleteForever size={32} />
          </Button>
        </div>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={handleDelete}
          id={id}
          name={name}
        />
        <FormDialog
          open={openForm}
          onClose={() => setOpenForm(false)}
          onSubmit={handleFix}
          name={name}
          number={number}
          id={id}
        />
      </div>
    </div>
  );
}
