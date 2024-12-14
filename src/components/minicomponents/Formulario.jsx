import "./formulario.css"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Formulario() {
  const [state, handleSubmit] = useForm("mkgnalwl");
  if (state.succeeded) {
      return <p className="validacion">Gracias por enviar el mensaje</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="formulario-container">
  <h2>Correo</h2>  
  <div className="campo">
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      className="campo-input"
    />
    <ValidationError
      prefix="Email"
      field="email"
      errors={state.errors}
    />
  </div>

  <div className="campo">
    <label htmlFor="message">Nombre</label>
    <input
      id="message"
      name="message"
      className="campo-input"
    />
    <ValidationError
      prefix="Name"
      field="Name"
      errors={state.errors}
    />
  </div>

  <div className="campo">
    <label htmlFor="message">Mensaje</label>
    <textarea
      id="message"
      name="message"
      className="campo-textarea"
    />
    <ValidationError
      prefix="Message"
      field="message"
      errors={state.errors}
    />
  </div>

  <button type="submit" className="boton-enviar" disabled={state.submitting}>
    Enviar
  </button>
</form>

  );
}
