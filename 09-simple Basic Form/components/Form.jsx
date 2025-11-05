import React, { useState } from "react";
import "../style.css";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorusername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUsername("");
      setUserColor("#b07b50");
    } else {
      setErrorUsername("username must be 8 letters long");
      setUserColor("#d46a6a ");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("#b07b50");
    } else {
      setErrorEmail("Email should have @gmail");
      setEmailColor("#d46a6a ");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("#b07b50");
    } else {
      setErrorPassword("Password must be 8 letters long");
      setPasswordColor("#d46a6a ");
    }

    if (password != "" && confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("#b07b50");
    } else {
      setErrorConfirmPassword("Password didn't match");
      setConfirmPasswordColor("#d46a6a ");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderBottom: `2px solid ${userColor}` }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{errorusername}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderBottom: `2px solid ${emailColor}` }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="password"
            style={{ borderBottom: `2px solid ${passwordColor}` }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="confirm password"
            style={{ borderBottom: `2px solid ${confirmPasswordColor}` }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
