import React, { useRef } from 'react';
import './contact.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mymjok2', 'template_l8zyopr', form.current, 'mwj9m4kjpKmJtcogj')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <section id="contact">
        <h2 className="conTitle">Get in touch</h2>
        <p className="conDesc">Let's work together!</p>
        <form className='contForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='from_name'/>
          <input type="email" className="email" placeholder='Your Email' name='from_email'/>
          <textarea name="message" rows="10" placeholder='Your Message' className='msg'></textarea>
          <button className="btn btn-dark submitbtn" type='submit' value='send'>Submit</button>
        </form>
    </section>
  )
}

export default Contact