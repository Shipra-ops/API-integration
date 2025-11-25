import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Update = ({ students = [], setStudents }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = students.find(u => u.id == id);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setCity(user.city || user.address?.city || "");
      setPhone(user.phone);
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      city,
      phone
    };

    const newList = students.map(u =>
      u.id == id ? updatedUser : u
    );

    setStudents(newList);

    navigate("/");
  };

  return (
    <div className=" d-flex justify-content-center mt-5">
      <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4 p-4 shadow rounded bg-white">
      <h2 className="text-center mb-4">Edit Student</h2>

      {!user ? (
        <h4>User not found</h4>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button className="btn btn-primary mt-3" type="submit">
            Update
          </button>
          <Link to="/" className="btn btn-secondary mt-3">Back</Link>
        </form>
      )}
    </div>
    </div>
  );
};

export default Update;
