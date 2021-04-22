import styles from './List.module.scss';
import Item from '../Item';
import PropTypes from 'prop-types';

const List = ({ options, onClick }) => (
  <ul className={styles.feedbackList}>
    {options.map(item => (
      <Item key={item} name={item} onClick={onClick} />
    ))}
  </ul>
);
List.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default List;
