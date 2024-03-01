import React from 'react';
import './Calendar.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar =() => {
    return (
        <div className='calendar-container'>
             <h1>
                calendar will be here
            </h1>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={true} // optional, show weekends
                events={[
                    { title: 'Event 1', date: '2024-03-01' },
                    { title: 'Event 2', date: '2024-03-15' },
                    // Add more events as needed
                ]}
            />
        </div>
    )
}

export default Calendar;
