import s from './errorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={s.message}>
      Oops.... <br /> Something was wrong :( <br /> Please try again...
    </div>
  );
};

export default ErrorMessage;
