import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ setStudents }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      city,
      phone,
    };

    setStudents((prev) => [...prev, newStudent]); // ADD TO LIST
    navigate("/");
  };

  return (
    <div className=" d-flex justify-content-center mt-5">
      <div className="col-md-4 p-4 shadow rounded bg-white">
      <h2>Add Student</h2>

          <form onSubmit={handleSubmit}>
            <input className="form-control mb-2"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input className="form-control mb-2"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <input className="form-control mb-2"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
    </div>
  );
};

export default Create;
