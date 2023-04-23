import React from "react";
import { useState, useEffect } from "react";

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
  return (
    <>
      <h3>Me contacter</h3>
      <form onSubmit={(e) => handleSubmit(e)} action="" className="formulaire">
        <input
          type="text"
          name="username"
          placeholder="votre nom"
          autoComplete="off"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <textarea
          name=""
          id=""
          placeholder="votre message"
          $
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Me Contacter</button>
      </form>
    </>
  );
};

export default From;
