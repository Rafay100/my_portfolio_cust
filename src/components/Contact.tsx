import React from 'react'
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import '../app/style/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-cols-2'>
        <div className='contact-space'>
          <h2 className='contact-heading' data-aos="zoom-in-up">Get in touch</h2>
          <p className='contact-text' data-aos="zoom-in-up">
            Drop me aline, give me acall, or send me a message by submitting the form.
          </p>
          <div className='contact-flex' data-aos="zoom-in-up">
          <LuMail  size={30} /> srafay2021@gmail.com
          </div>
          <div className='contact-flex' data-aos="zoom-in-up">
          <BsTelephone size={30} /> 0316-1612741
          </div>
          <div className='contact-flex' data-aos="zoom-in-up">
          <CiLinkedin size={30} /> SYED ABDUL RAFAY
          </div>
          <div className='contact-flex' data-aos="zoom-in-up">
          <AiOutlineGithub size={30} /> Rafay100
          </div>
        </div>
        <div className='contact-space'>
          <div className='form' data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='input-field'
            id='name'/>
          </div>
          <div className='form' data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='input-field'
            id='email'/>
          </div>
          <div className='form' data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea 
            className='textarea-field'
            id='msg' rows={8}>
            </textarea>
          </div>
          <button className='button' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
