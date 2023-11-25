import React from 'react';
import PropTypes from 'prop-types';
import {} from './Section.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
