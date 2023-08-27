// AttendanceForm.js
import React from 'react';
import StudentList from './StudentList';

const AttendanceForm = ({ students, onToggleAttendance, onSubmit }) => {
  return (
    <div className="mt-4 p-4 bg-gray-200">
      <h2 className="text-xl mb-2">Mark Attendance</h2>
      <form onSubmit={onSubmit}>
        <StudentList students={students} onToggleAttendance={onToggleAttendance} />
       
       
        <div className="vertical-center">
        <button
          type="submit"
          className="bg-purple-800 text-white  px-4 py-2 rounded-md"
        >
          Submit
        </button>
        
        </div>
        </form>
        </div>
  );
};

export default AttendanceForm;
