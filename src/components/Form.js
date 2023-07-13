import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colors } from "../utils/styles";
import SendIcon from "@mui/icons-material/Send";

const FormContainer = styled.div`
  width: 60%;
  justify-content: center;
  margin: 0 auto;
  padding-top: 50px;
`;
const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  margin: 10px auto;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
`;
const Button = styled.button`
  padding: 6px;
  margin: 10px 0;
  color: #f1f1f1;
  background: #11c784;
  border-radius: 5px;
  border: transparent;
  font-size: 1.1rem;
  transition: 0.3s ease;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.077);
  }
`;
const ContactWrapper = styled.h3`
  display: block;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "rgb(22, 21, 19)" : "#f1f1f1")};
  text-align: center;
  width: 200px;
  opacity: 0.8;
  font-size: 1.2rem;
  padding-top: 50px;
  margin: 5px auto;
  text-transform: uppercase;
`;
const LabelWrapper = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-top: 5px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  font-size: 0.8rem;
`;

const InputWrapper = styled.input`
  display: block;
  transition: 0.3s ease;
  padding: 10px;
  margin: 5px 0;
  border: 4px;
  outline: none;
  border-radius: 10px;
  font-size: 1rem;
  width: 100%;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }
`;
const Textarea = styled.textarea`
  display: block;
  outline: none;
  width: 100%;
  border-radius: 10px;
  font-size: 1rem;
  font-family: "Poppins", sans-seri;
  border: 1px solid #f1f1f1;
  &::placeholder {
    font-size: 1rem;
    font-family: "Poppins", sans-seri;
  }
`;
const From = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 0 && email.length > 0 && message.length > 0) {
      const Objmessage = {
        username: userName,
        mail: email,
        message: message,
      };

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
    <FormContainer>
      <ContactWrapper theme={theme}>Me contacter</ContactWrapper>
      <FormWrapper
        onSubmit={(e) => handleSubmit(e)}
        action=""
        className="formulaire"
      >
        {/* firstname */}
        <div className="first">
          <LabelWrapper theme={theme}>votre nom</LabelWrapper>
          <InputWrapper
            type="text"
            name="username"
            placeholder="votre nom"
            autoComplete="off"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* email */}
        <div className="email">
          <LabelWrapper theme={theme}>votre adresse mail</LabelWrapper>
          <InputWrapper
            type="email"
            name="email"
            placeholder="votre email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mess">
          <LabelWrapper theme={theme}>votre message</LabelWrapper>

          <Textarea
            name="message"
            placeholder="votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="10"
          ></Textarea>
        </div>

        <Button type="submit">
          Envoyer{" "}
          <SendIcon
            style={{ fontSize: 30, marginLeft: 10, color: "aliceblue" }}
          />
        </Button>
      </FormWrapper>
    </FormContainer>
  );
};

export default From;
