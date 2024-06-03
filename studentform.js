import React, { useState, useEffect } from 'react';

const StudentForm = ({ studentToEdit, onSave }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
    } else {
      setName('');
    }
  }, [studentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: studentToEdit ? studentToEdit.id : Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default StudentForm;
