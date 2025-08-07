import React, { useState } from 'react'

import { send } from '@emailjs/browser';



function Contact() {
  let[from_name, setname]=useState("");
let[from_email, setemail]=useState("")
let[message,setmessage]=useState("")

function handleSubmit(e){
  e.preventDefault();

  var templateParams = {
  to_name: 'Muskaaan',
  from_name: from_name,
  message:message,
  from_email:from_email,
};

console.log(templateParams)

send('service_1s6htwi', 'template_qaevlmy', templateParams, 'UqWbmnhTD0FliBtqp').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
}


  return (
   <div>
    <h1>
       Contact Page
    </h1>

    <form action="" onSubmit={handleSubmit}>


      <input type="text" name="" id="" onChange={(e)=>{setname(e.target.value)}} placeholder='Enter Your name'/>
      <br /><br />
      <input type="email" name="" id=""  onChange={(e)=>{setemail(e.target.value)}}placeholder='Enter your email'/>
      <br /><br />
      
     
     
      <textarea name="" id=""  onChange={(e)=>{setmessage(e.target.value)}}placeholder='Enter your message'></textarea>
      <br />
       <button className='btn btn-primary'>Send</button>
        <br />
    </form>
   </div>
   
  )
}

export default Contact