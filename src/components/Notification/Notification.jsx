import React from 'react';
import PropTypes from 'prop-types';
import {} from './Notification.css';

export const Notification = ({ notification }) => {
  return (
    <div>
      <h3 className="notification">{notification}</h3>
    </div>
  );
};
Notification.propTypes = {
  notification: PropTypes.string.isRequired,
};
