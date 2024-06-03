import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const handleSaveStudent = (student) => {
    if (studentToEdit) {
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
      setStudentToEdit(null);
    } else {
      setStudents([...students, student]);
    }
  };

  const handleEditStudent = (student) => {
    setStudentToEdit(student);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app">
      <h1>Student Management</h1>
      <StudentForm studentToEdit={studentToEdit} onSave={handleSaveStudent} />
      <StudentList students={students} onEdit={handleEditStudent} onDelete={handleDeleteStudent} />
    </div>
  );
};

export default App;

