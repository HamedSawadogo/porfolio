import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colors } from "../utils/styles";

const FormContainer = styled.div`
  padding: 10px;
`;
const FormWrapper = styled.form`
  display: grid;
  margin: 10px auto;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
`;
const Button = styled.button`
  padding: 10px;
  margin: 5px 0;
  color: #f1f1f1;
  background: #11c784;
  border-radius: 5px;
  border: transparent;
  font-size: 1.1rem;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.077);
  }
`;
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

const InputWrapper = styled.input`
  display: block;
  transition: 0.3s ease;
  padding: 10px;
  margin: 5px 0;
  border: 4px;
  outline: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }
`;
const Textarea = styled.textarea`
  display: block;
  outline: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: "Poppins", sans-seri;
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
      console.log(Objmessage);
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
          <LabelWrapper htmlFor="username" theme={theme}>
            votre nom
          </LabelWrapper>
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
          <LabelWrapper theme={theme} htmlFor="email">
            votre adresse mail
          </LabelWrapper>
          <InputWrapper
            type="email"
            name="email"
            id=""
            placeholder="votre email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mess">
          <LabelWrapper theme={theme} htmlFor="message">
            votre message
          </LabelWrapper>

          <Textarea
            name="message"
            id=""
            placeholder="votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="10"
          ></Textarea>
        </div>

        <Button type="submit">Me Contacter</Button>
      </FormWrapper>
    </FormContainer>
  );
};

export default From;
