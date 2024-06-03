import React from 'react';
import Student from './student';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="student-list">
      {students.map((student) => (
        <Student key={student.id} student={student} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default StudentList;
