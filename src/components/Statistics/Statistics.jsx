import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statisticsBlock}>
    <p className={styles.item}>Good: {good}</p>
    <p className={styles.item}>Neutral: {neutral}</p>
    <p className={styles.item}>Bad: {bad}</p>
    <p className={styles.item}>Total: {total}</p>
    <p className={styles.item}>Positive feedback: {positivePercentage}%</p>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
