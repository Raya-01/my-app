import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="registration-container">
      <h1 className="form-title">Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Име:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Въведете вашето име"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Имейл:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="ваш@имейл.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Парола:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Създайте парола"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submit-button">
            Регистрирай се
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="clear-button"
          >
            Изчисти
          </button>
        </div>
      </form>

      <div className="output-section">
        <h3 className="output-title">Въведени данни:</h3>
        <div className="output-item">
          <span className="output-label">Име:</span>
          <span className="output-value">{name || "(не е въведено)"}</span>
        </div>
        <div className="output-item">
          <span className="output-label">Имейл:</span>
          <span className="output-value">{email || "(не е въведено)"}</span>
        </div>
        <div className="output-item">
          <span className="output-label">Парола:</span>
          <span className="output-value">
            {password ? "••••••••" : "(не е въведена)"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;