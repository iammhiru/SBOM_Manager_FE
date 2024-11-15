import React, { useEffect } from 'react';
import '../css/Notification.css';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    // Auto-close the notification after 3 seconds
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;