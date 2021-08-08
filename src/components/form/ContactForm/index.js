// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { form } from "../index.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("moqykzjy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form className={form} onSubmit={handleSubmit}>
      <input
        id="name"
        type="text" 
        name="name"
         placeholder="Enter your name here" 
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email Address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <input
        id="tel"
        type="tel" 
        name="tel"
        placeholder="Phone number"
      />
      <ValidationError 
        prefix="Tel" 
        field="tel"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        cols="30"
        rows="5"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    
  );
}

export default ContactForm;