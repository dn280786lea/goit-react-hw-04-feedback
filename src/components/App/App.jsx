import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import {} from './App.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (total, value) => total + value
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const percentage = (this.state.good / total) * 100;
    return percentage.toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage();

    return (
      <section className="section-feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section className="statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification notification="There is no feedback" />
          )}
        </Section>
      </section>
    );
  }
}
