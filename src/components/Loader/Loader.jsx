import s from './loader.module.scss';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Audio height="80" width="80" radius="9" color="blue" />
    </div>
  );
};

export default Loader;
