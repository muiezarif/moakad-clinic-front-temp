import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
            />
        </>
    )
}

export default Datepicker