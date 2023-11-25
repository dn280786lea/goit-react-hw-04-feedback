import React from 'react';
import PropTypes from 'prop-types';
import {} from './Statistics.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => (
  <div className="statistics">
    <li className="btnstat">Good: {good}</li>
    <li className="btnstat">Neutral: {neutral}</li>
    <li className="btnstat">Bad: {bad}</li>
    <li className="btnstat">Total: {total}</li>
    <li className="btnstat">Positive feedback: {positivePercentage}%</li>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
