import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.warn('Invalid feedback option');
    }
  };

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = totalFeedback;
    if (total === 0) {
      return 0;
    }
    const percentage = (good / total) * 100;
    return percentage.toFixed(2);
  };

  return (
    <section className="section-feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section className="statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification notification="There is no feedback" />
        )}
      </Section>
    </section>
  );
}

export default App;
