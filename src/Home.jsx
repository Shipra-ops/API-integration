import { Link } from "react-router-dom";

const Home = ({ students, setStudents }) => {
  const handleDelete = (id) => {
    const filtered = students.filter((s) => s.id !== id);
    setStudents(filtered);
  };
  return (
    <div className="container table-wrapper table-responsive">
      <h2>Students Records</h2>

      <Link to="/create" className="btn add-btn" >
        Add new Student
      </Link>

      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.city || stu.address?.city}</td>
              <td>{stu.phone}</td>
              <td>
                <Link to={`/read/${stu.id}`} className="btn btn-info btn-sm me-2"> View </Link>
                <Link to={`/update/${stu.id}`} className="btn btn-warning btn-sm me-2" >Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(stu.id)} > Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
