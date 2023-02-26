import React, { useState } from "react";

const SelectDate = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="button-container">
      <div 
      style={{
        border:"1px solid green",
        padding:"15px",
        borderRadius:"5px",
        width:"440px",
        margin:"auto",
        display:"flex",
        justifyContent:"space-between",
      }}
      >
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          style={{ border: "none" }}
        />
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          style={{ border: "none" }}
        />
      </div>
      <div>
        <button className="button">{`${formatDate(date)}, ${formatTime(
          time
        )}`}</button>
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  if (!dateString) {
    return "Select Date";
  }

  const date = new Date(dateString);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
};

const formatTime = (timeString) => {
  if (!timeString) {
    return "Select Time";
  }

  const time = new Date(`2000-01-01T${timeString}:00`);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return time.toLocaleTimeString("en-US", options);
};

export default SelectDate;
