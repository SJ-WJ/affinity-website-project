import React from 'react';
import GoogleCalendar from './GoogleCalendar';

const Calender: React.FC = () => {
  const calendarUrl = "https://calendar.google.com/calendar/embed?src=6b7d3c1d3ea4c62e2347e670db733ff89df7d02f20f14ad02f84da13694b04e0%40group.calendar.google.com&ctz=America%2FEdmonton";
    return (
        <div>
            <main className="calender-content">
                <h1>Events Schedule</h1>
                <GoogleCalendar calendarUrl={calendarUrl} />
            </main>
        </div>
    );
};

export default Calender;
