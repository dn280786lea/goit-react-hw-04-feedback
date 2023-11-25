import React from 'react';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
