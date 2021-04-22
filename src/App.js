import React, { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import './styles.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  submitHandler = e => {
    const name = e.currentTarget.getAttribute('name');
    const value = this.state[name];
    this.setState({
      [name]: value + 1,
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const countPositiveFeedback = (this.state.good * 100) / total;
    return Math.round(countPositiveFeedback);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.submitHandler}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
