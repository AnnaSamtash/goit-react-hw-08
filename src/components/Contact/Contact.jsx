import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { MdDeleteForever } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import {
  openConfirmDialog,
  openFormDialogIsOpen,
} from '../../redux/modals/slice';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

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
            onClick={() => dispatch(openFormDialogIsOpen({ name, number, id }))}
            style={{ margin: 0, backgroundColor: '#36d836cd' }}
          >
            <FaPencilAlt size={32} />
          </Button>
          <Button
            onClick={() => dispatch(openConfirmDialog({ name, number, id }))}
            style={{ margin: 0 }}
          >
            <MdDeleteForever size={32} />
          </Button>
        </div>
      </div>
    </div>
  );
}
