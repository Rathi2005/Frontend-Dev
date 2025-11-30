import { useState } from "react";
import { addStudent, updateStudent } from "../services/studentService";

function StudentForm({ setScreen, isEdit, student }) {

  const [name, setName] = useState(student ? student.name : "");
  const [section, setSection] = useState(student ? student.section : "");
  const [marks, setMarks] = useState(student ? student.marks : "");
  const [grade, setGrade] = useState(student ? student.grade : "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = { name, section, marks, grade };

    if (isEdit) {
      await updateStudent(student.id, newStudent);
      alert("Student updated successfully!");
    } else {
      await addStudent(newStudent);
      alert("Student added successfully!");
    }

    setScreen("list");
  };

  return (
    <div>
      <h2>{isEdit ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required /><br/>
        <input placeholder="Section" value={section} onChange={(e)=>setSection(e.target.value)} required /><br/>
        <input placeholder="Marks" value={marks} onChange={(e)=>setMarks(e.target.value)} required /><br/>
        <input placeholder="Grade" value={grade} onChange={(e)=>setGrade(e.target.value)} required /><br/>

        <button type="submit">Save</button>
        <button type="button" onClick={() => setScreen("list")}>Cancel</button>
      </form>
    </div>
  );
}

export default StudentForm;
