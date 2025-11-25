import React from "react";
import { useParams, Link } from "react-router-dom";

const Read = ({ students = [] }) => {
  const { id } = useParams();

  const user = students.find((u) => u.id == id);

  if (!user) {
    return (
      <div className="container">
        <h3>User not found</h3>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className=" d-flex justify-content-center mt-5">
      <div className="col-md-4 p-4 shadow rounded bg-white">
      <h2 className="text-center mb-4">Student Details</h2>

      <div className="card p-4 mt-3">
        <h4><strong>ID:</strong> {user.id}</h4>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>City:</strong> {user.city || user.address?.city}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>

      <Link to="/" className="btn btn-secondary mt-3">Back</Link>
    </div>
    </div>
  );
};

export default Read;
