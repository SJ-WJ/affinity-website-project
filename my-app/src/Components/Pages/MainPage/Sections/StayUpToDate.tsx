import React, { useState } from 'react';

// Constants for days of the week for the calendar header
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// A mock function to simulate fetching events
const fetchEventsForDay = (day: number) => {
  // Placeholder for your event fetching logic
  return { eventName: 'Sample Event', infoTime: '2:00 PM', eventDescription: 'This is a sample event.' };
};

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const addMonths = (date: Date, count: number): Date => {
    let newDate = new Date(date.valueOf());
    newDate.setMonth(newDate.getMonth() + count);
    return newDate;
  };

  const handleDayClick = (day: number) => {
    const eventDetails = fetchEventsForDay(day);
    // setSelectedEvent(eventDetails);
  };

  const renderCalendarDays = (): JSX.Element[] => {
    const daysInMonth = getDaysInMonth(currentDate);
    const days: JSX.Element[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <button key={i} onClick={() => handleDayClick(i)} className="p-2 border flex justify-center items-center w-full">
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="flex bg-dutch-wine">
      <div className="w-2/3 pb-4 px-2">
        <header className="flex justify-between p-2 font-bold text-xl">
          <button onClick={() => setCurrentDate(addMonths(currentDate, -1))}>
            Prev
          </button>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h2>
          <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            Next
          </button>
        </header>
        <div className="grid grid-cols-7 divide-black">
          {daysOfWeek.map((day) => (
            <div key={day} className="p-2 border flex justify-center items-center">
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>
      {selectedEvent && (
        <div className="w-1/3 p-4 bg-gray-100">
          {/* <h3 className="font-bold">{selectedEvent.eventName}</h3> */}
          {/* <p>{selectedEvent.infoTime}</p> */}
          {/* <p>{selectedEvent.eventDescription}</p> */}
        </div>
      )}
    </div>
  );
};

export default Calendar;
