
// Header.js
import React from 'react';

const Header = ({ date, onMarkAttendance }) => {
  return (
    <div className="bg-purple-900 p-4">
      <h1 className="text-2xl text-center text-white font-serif">Class Attendance</h1>
      <p className="text-white">Date: {date}</p>
      <button
        className="bg-white text-purple-500 px-2 py-1 rounded-md "
        onClick={onMarkAttendance}
      >
        Mark Attendance
      </button>
    </div>
  );
};

export default Header;
