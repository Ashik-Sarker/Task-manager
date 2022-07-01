import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date())

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <div>
            <h1>This is Calendar</h1>
            <div className='w-2/4 mx-auto mt-24 bg-blue-100 flex justify-center'>
                <DayPicker
                mode="single"
                selected={date}
                    onSelect={setDate}
                    footer={footer}
                />
            </div>
            {/* <p>You picked {format(date, 'PP')}.</p> */}
        </div>
    );
};

export default Calendar;