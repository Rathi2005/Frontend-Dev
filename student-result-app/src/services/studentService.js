const API_URL = "http://localhost:5000/students";

export async function getStudents() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addStudent(student) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
}

export async function updateStudent(id, student) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
}

export async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

export async function getStudentById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
