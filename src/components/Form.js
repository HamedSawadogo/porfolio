import React, { useRef } from "react";

const Form = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      username: formRef.current.username.value,
      mail: formRef.current.email.value,
      message: formRef.current.message.value,
    };
    console.log(message);
    formRef.current.reset();
  };
  return (
    <form id="form" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">votre nom</label>
      <input
        type="text"
        placeholder="votre nom"
        name="username"
        autoComplete="off"
      />
      {/* email */}
      <label htmlFor="email">votre adresse mail</label>
      <input
        type="email"
        placeholder="votre adresse mail"
        name="email"
        autoComplete="off"
      />
      <label htmlFor="message">votre Message</label>
      <textarea
        name="message"
        id=""
        cols="10"
        rows="10"
        placeholder="votre message"
      ></textarea>
      <button>envoyer</button>
    </form>
  );
};

export default Form;
