import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3mwnodt', 'template_fxeoblj', form.current, 'Mine2i3LfozGh5wAI')
      .then((result) => {
          console.log(result.text);
          setName("")
          setEmail("")
          setMessage("")
      }, (error) => {
          console.log(error.text);
      });

    alert("Email Sent");
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 md:pt-24'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                {/* eslint-disable-next-line */}
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - danishkar.s@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' onChange = {(e)=>setName(e.target.value)} value={name} name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' onChange = {(e)=>setEmail(e.target.value)} value={email} name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' onChange = {(e)=>setMessage(e.target.value)} value={message}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact