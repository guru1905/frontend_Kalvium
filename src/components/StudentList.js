// StudentList.js
import React from 'react';
import Student from './Student';

const StudentList = ({ students, onToggleAttendance }) => {
  return (
    <div>
      {students.map((student) => (
        <Student
          key={student.id}
          student={student}
          onToggleAttendance={onToggleAttendance}
        />
      ))}
    </div>
  );
};

export default StudentList;
