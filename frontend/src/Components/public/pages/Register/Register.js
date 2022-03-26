import React, { useState } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";

export default function Signup() {
  // States for registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {firstName + " " + lastName} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        {/* Labels and inputs for form data */}
        <h1>Sign Up</h1>
        <label className="label">First Name</label>
        <input
          onChange={handleFirstName}
          className="input"
          value={firstName}
          type="text"
          required
        />
        <label className="label">Last Name</label>
        <input
          onChange={handleLastName}
          className="input"
          value={lastName}
          type="text"
          required
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
          required
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
          required
        />

        <Button onClick={handleSubmit} className="butn" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
