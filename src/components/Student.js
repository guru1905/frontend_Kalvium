// Student.js
import React from 'react';
import photo from '../public/Asserts/logo.png'

const Student = ({ student, onToggleAttendance }) => {
  return (
    <div className="border p-2 my-2 flex items-center">
      <img src={photo} alt={student.name} className="w-12 h-12 rounded-full" />
      <p className="ml-2">{student.name}</p>
      <label className="ml-auto">
        Present
        <input
          type="checkbox"
          checked={student.attendance}
          onChange={() => onToggleAttendance(student.id)}
          className="ml-2"
        />
      </label>
    </div>
  );
};

export default Student;

