import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };

  handelLeaveFeedback = el => this.setState(prev => ++prev[el]);

  
  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedback);
    return (
      <>
       <Container > <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handelLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification msg="There is no feedback" />
          )}
        </Section></Container>
      </>
    );
  }
}

export default App;