import s from './errorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={s.message}>
      Oops we have a problem :( <br /> Please try again later...
    </div>
  );
};

export default ErrorMessage;
