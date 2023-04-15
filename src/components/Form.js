import React, { useState, useEffect } from "react";

const Form = () => {
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
  return (
    <form id="form" onSubmit={(e) => handleSubmit(e)}>
      {error && <p>Veillez bien envoyer votre message</p>}
      <label htmlFor="name">votre nom</label>
      <input
        type="text"
        placeholder="votre nom"
        name="username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
      />
      {/* email */}
      <label htmlFor="email">votre adresse mail</label>
      <input
        type="email"
        placeholder="votre adresse mail"
        name="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">votre Message</label>
      <textarea
        name="message"
        id=""
        cols="10"
        rows="10"
        placeholder="votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button id="send" disabled={!isDisabled}>
        envoyer
      </button>
    </form>
  );
};

export default Form;
