import React from 'react';

interface CalendarProps {
  calendarUrl: string;
}

const GoogleCalendar: React.FC<CalendarProps> = ({ calendarUrl }) => {
  return (
    <div className="overflow-hidden p-0 m-0 h-[500px] w-full">
      <iframe
        src={calendarUrl}
        className="border-0 w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;

