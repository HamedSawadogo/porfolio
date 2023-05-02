import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colors } from "../utils/styles";

const ContactWrapper = styled.h3`
  transition: 0.3s ease;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  margin: 50px auto;
  width: 160px;
  border-bottom: 3px solid ${colors.color1};
  display: block;
  padding: 10px;
`;

const LabelWrapper = styled.label`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  font-size: 0.8rem;
`;
const From = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(userName.length > 0 && email.length > 0 && message.length > 0);
  }, [email, userName, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 0 && email.length > 0 && message.length > 0) {
      const Objmessage = {
        username: userName,
        mail: email,
        message: message,
      };
      console.log(Objmessage);
      setDisabled(false);
      setEmail("");
      setMessage("");
      setUsername("");
      setError(false);
    } else {
      setError(true);
    }
  };
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="form-container">
      <ContactWrapper theme={theme}>Me contacter</ContactWrapper>
      <form onSubmit={(e) => handleSubmit(e)} action="" className="formulaire">
        <LabelWrapper htmlFor="username" theme={theme}>
          votre nom
        </LabelWrapper>
        <input
          type="text"
          name="username"
          placeholder="votre nom"
          autoComplete="off"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <LabelWrapper theme={theme} htmlFor="email">
          votre adresse mail
        </LabelWrapper>
        <input
          type="email"
          name="email"
          id=""
          placeholder="votre email"
          autoComplete="off"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <LabelWrapper theme={theme} htmlFor="message">
          votre message
        </LabelWrapper>

        <textarea
          name="message"
          id=""
          placeholder="votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Me Contacter</button>
      </form>
    </div>
  );
};

export default From;
