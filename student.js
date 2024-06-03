import React from 'react';

const Student = ({ student, onEdit, onDelete }) => {
  return (
    <div className="student">
      <span>{student.name}</span>
      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
};

export default Student;
