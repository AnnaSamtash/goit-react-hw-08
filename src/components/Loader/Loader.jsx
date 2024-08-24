import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Hourglass
        visible={true}
        height="150"
        width="150"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#36d836cd', '#e86914']}
      />
    </div>
  );
};
export default Loader;
