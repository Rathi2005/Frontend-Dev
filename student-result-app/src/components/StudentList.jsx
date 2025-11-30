import {
  getStudents,
  deleteStudent,
} from "../services/studentService";

function StudentList({ students, setStudents, setScreen, setSelectedStudent }) {

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    alert("Student deleted. Click Load Students to refresh.");
  };

  return (
    <div>
      <h2>Students List</h2>

      <button onClick={loadStudents}>Load Students</button>
      <button onClick={() => setScreen("add")}>Add Student</button>

      <table border="1" width="100%" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Section</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.section}</td>
              <td>{s.marks}</td>
              <td>{s.grade}</td>

              <td>
                <button onClick={() => { setSelectedStudent(s); setScreen("edit"); }}>Edit</button>

                <button onClick={() => handleDelete(s.id)}>Delete</button>

                <button onClick={() => { setSelectedStudent(s); setScreen("details"); }}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default StudentList;
    