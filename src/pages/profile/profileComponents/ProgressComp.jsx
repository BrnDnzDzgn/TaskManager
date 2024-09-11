import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarCustom.css';

const ProgressComp = ({ taskHistory }) => {
const [date, setDate] = useState(new Date());
const [completedDays, setCompletedDays] = useState([]);

useEffect(() => {
    const completed = taskHistory
    .filter(task => task.completed)
    .map(task => new Date(task.date));
    setCompletedDays(completed);
}, [taskHistory]);

const isCompleted = (date) => {
    return completedDays.some(completedDate => 
    completedDate.getDate() === date.getDate() && 
    completedDate.getMonth() === date.getMonth() && 
    completedDate.getFullYear() === date.getFullYear()
    );
};

return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-700">
        Task Completion Calendar
    </h2>
    <div className="mt-4 w-full">
    <Calendar
        onChange={setDate}
        value={date}
        className="w-full"
        tileClassName={({ date, view }) => {
            if (view === 'month' && isCompleted(date)) {
            return 'completed-day';
            } else {
            return 'incomplete-day';
            }
        }}
    />
    </div>
    </div>
);
};

export default ProgressComp;