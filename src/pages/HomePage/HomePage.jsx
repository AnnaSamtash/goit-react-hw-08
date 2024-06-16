import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Layout from '../../components/Layout/Layout';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <Layout>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={css.title_major}>
          Contacts manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <div className={css.container}>
          <h2 className={css.title}>Manage all your contacts effectively.</h2>
          <p className={css.text}>
            <strong>Secure Login & Registration</strong>: Protect your contact
            information with secure login and registration features.
          </p>
          <p className={css.text}>
            <strong>Store & Organize Contacts</strong>: Easily save and
            categorize all your contacts in one place.
          </p>
          <p className={css.text}>
            <strong>User-Friendly Interface</strong>: Navigate and manage your
            contacts with a simple and intuitive design.
          </p>
          <p className={css.text}>Start organizing your contacts today!</p>
          <p className={css.text}>
            Developed by{' '}
            <a
              className={css.link}
              href="www.linkedin.com/in/anna-samtash"
              target="_blank"
            >
              Samtash Anna
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
