// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import AttendanceForm from './components/AttendanceForm';
import Footer from './components/Footer';
const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', photo: 'photo_url', attendance: false },
    { id: 2, name: 'Student 2', photo: 'photo_url', attendance: false },
    { id: 3, name: 'Student 3', photo: 'photo_url', attendance: false },
    { id: 4, name: 'Student 4', photo: 'photo_url', attendance: false },
    { id: 5, name: 'Student 5', photo: 'photo_url', attendance: false },
    { id: 6, name: 'Student 6', photo: 'photo_url', attendance: false },
    { id: 7, name: 'Student 7', photo: 'photo_url', attendance: false },
    // Add more students here
  ]);

  const toggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, attendance: !student.attendance }
          : student
      )
    );
  };

  const markAttendance = () => {
    // Implement attendance marking logic here
  };

  return (
    <div>
      <Header className="header" date="August 26, 2023" onMarkAttendance={markAttendance} />
      <AttendanceForm
        students={students}
        onToggleAttendance={toggleAttendance}
        onSubmit={markAttendance}
      />
      <Footer/>
    </div>
  );
};

export default App;

