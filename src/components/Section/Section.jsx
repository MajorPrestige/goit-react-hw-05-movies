import s from './section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={s.wrapper}>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
