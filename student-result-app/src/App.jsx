import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

function App() {
  const [students, setStudents] = useState([]);
  const [screen, setScreen] = useState("list"); // list | add | edit | details
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      {screen === "list" && (
        <StudentList
          students={students}
          setStudents={setStudents}
          setScreen={setScreen}
          setSelectedStudent={setSelectedStudent}
        />
      )}

      {screen === "add" && (
        <StudentForm
          setScreen={setScreen}
          setStudents={setStudents}
          isEdit={false}
        />
      )}

      {screen === "edit" && (
        <StudentForm
          setScreen={setScreen}
          isEdit={true}
          student={selectedStudent}
        />
      )}

      {screen === "details" && (
        <StudentDetails
          student={selectedStudent}
          setScreen={setScreen}
        />
      )}
    </div>
  );
}

export default App;
