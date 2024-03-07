import React, { useState } from 'react';

// Constants for days of the week for the calendar header
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

// TypeScript types for better maintainability and predictability
type CalendarProps = {};
type DateObject = Date;

const Calendar: React.FC<CalendarProps> = () => {
  // State to hold the current date, defaulting to today's date
  const [currentDate, setCurrentDate] = useState<DateObject>(new Date());

  // Helper function to get the number of days in the month
  const getDaysInMonth = (date: DateObject): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Helper function to add or subtract months from a date
  const addMonths = (date: DateObject, count: number): DateObject => {
    let newDate = new Date(date.valueOf());
    newDate.setMonth(newDate.getMonth() + count);
    return newDate;
  };

  // Function to render the days in the current month
  const renderCalendarDays = (): JSX.Element[] => {
    const daysInMonth = getDaysInMonth(currentDate);
    const days: JSX.Element[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="p-2 border flex justify-center items-center">
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div>
      <header className="flex justify-between p-2">
        <button onClick={() => setCurrentDate(addMonths(currentDate, -1))}>
          Prev
        </button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })}{' '}
          {currentDate.getFullYear()}
        </h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
          Next
        </button>
      </header>
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 border flex justify-center items-center">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
