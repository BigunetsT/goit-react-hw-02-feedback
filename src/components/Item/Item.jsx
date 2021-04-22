import styles from './Item.module.scss';
import PropTypes from 'prop-types';

const Item = ({ name, onClick }) => (
  <li className={styles.item} name={name} onClick={onClick}>
    {name}
  </li>
);
Item.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Item;
