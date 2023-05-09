import { Component } from 'react';
import { Header } from './Header';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section/Section';
import { Statistics } from './Statistics';

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

  countPositiveFeedbackPercentage({ good }) {
    Math.round((good * 100) / this.countTotalFeedback(this.state));
  }

  handelLeaveFeedback = el => this.setState(prev => ++prev[el]);

  render() {
    return (
      <div>
        <Header title="Please leave feedback" />
        <Section> <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handelLeaveFeedback}
        /></Section>
        <Section title="Statistics" />
        <Statistics
         {...this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /><Statistics/>
        <Section/>
      </div>
    );
  }
}

export default App;