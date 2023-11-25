import React from 'react';
import {} from './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedbackoptions">
      {options.map(option => (
        <button
          className="feedbackbtn"
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
