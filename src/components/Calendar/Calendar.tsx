import React, { useState, useEffect } from "react";
import "./Calendar.scss";

interface DayCell {
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
}

const Calendar: React.FC = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<DayCell[]>([]);

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonthIndex = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDateOfPrevMonth = new Date(year, month, 0).getDate();
    const lastWeekdayOfMonth = new Date(year, month + 1, 0).getDay();
    const nextMonthFadeCount = 7 - lastWeekdayOfMonth - 1;

    const daysArray: DayCell[] = [];

    // Previous month fade days
    for (let i = firstDayOfMonthIndex; i > 0; i--) {
      const dayNumber = lastDateOfPrevMonth - i + 1;
      daysArray.push({
        day: dayNumber,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Current month days
    for (let d = 1; d <= lastDateOfMonth; d++) {
      const isToday =
        d === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      daysArray.push({
        day: d,
        isCurrentMonth: true,
        isToday,
      });
    }

    // Next month fade days
    for (let i = 1; i <= nextMonthFadeCount; i++) {
      daysArray.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    setCalendarDays(daysArray);
  };

  const handlePrev = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNext = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  return (
    <div className="calendar">
      <div className="header">
        <div id="prev" className="btn" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div id="month-year">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <div id="next" className="btn" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="days" id="days">
        {calendarDays.map((cell, idx) => {
          const classNames = [
            !cell.isCurrentMonth ? "fade" : "",
            cell.isToday ? "today" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={idx} className={classNames}>
              {cell.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
