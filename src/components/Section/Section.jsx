import styles from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
