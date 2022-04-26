import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function StartDateEndDateForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = () => {
    console.log('Submit was handled', startDate, endDate);
  };
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
      />
      <div>
        {startDate.toString('yyyy-MM-dd')} {endDate.toString()}
      </div>
    </>

    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="startDate">Start Date </label>
    //   <input
    //     id="startDate"
    //     type="date"
    //     value="startDate"
    //     onChange={(e) => setStartDate(e.target.value)}
    //   />
    //   <label htmlFor="endDate">End Date </label>
    //   <input
    //     id="endDate"
    //     type="date"
    //     value="endDate"
    //     onChange={(e) => setEndDate(e.target.value)}
    //   />
    //   <input type="submit" />
    // </form>
  );
}

export default StartDateEndDateForm;
