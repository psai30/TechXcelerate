import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("buyer");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({ username: "", password: "", name: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Redirect to the homepage or dashboard after successful login
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Login as:</label>
                <select className="form-select" value={role} onChange={handleRoleChange}>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>

              {role === "buyer" && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                  </div>
                </>
              )}

              {role === "seller" && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                </>
              )}

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <a href="/">Sign Up here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
