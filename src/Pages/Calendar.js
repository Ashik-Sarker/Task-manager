import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date())

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p className='text-secondary'>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <div className='my-20 w-2/3 md:w-2/6 mx-auto'>
            <div className='bg-blue-100 flex justify-center shadow-2xl p-8'>
                <DayPicker
                mode="single"
                selected={date}
                    onSelect={setDate}
                    footer={footer}
                />
            </div>
        </div>
    );
};

export default Calendar;