import styles from './FeedbackOptions.module.scss';
import List from '../List';
import PropTypes from 'prop-types';

const FeedbackBlock = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedbackBlock}>
    <List onClick={onLeaveFeedback} options={options} />
  </div>
);

FeedbackBlock.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackBlock;
