import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import Layout from './components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from './redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ContactList />
    </Layout>
  );
};

export default App;
