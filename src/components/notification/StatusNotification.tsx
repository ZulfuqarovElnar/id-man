import React from 'react';
import StatusIcon from '../svg/StatusIcon';

interface StatusNotificationProps {
  message: string;
  status: 'open' | 'closed';
}

const StatusNotification: React.FC<StatusNotificationProps> = ({ message, status }) => {
  return (
    <div
      className={`fixed top-24 right-4 flex items-center gap-1 px-4 py-2 rounded-lg shadow-lg bg-white text-black border-2 ${
        status === 'open' ? 'border-green-500' : 'border-red-500'
      }`}
    >
      <StatusIcon status={status} />
      <span>{message}</span>
    </div>
  );
};

export default StatusNotification;
