import { useState } from "react";
import React from 'react';


const Contact =()=> {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const backendhost = `http://127.0.0.1:5000`
    const handleSubmit = async(event)=>{
      event.preventDefault();
      const data = {firstname,lastname,phone,email};
      const response = await fetch(`${backendhost}/api/user`,{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
      });

    const result = await response.text();
    console.log(result)
    };
    
    return (<>
        <h1 id='head'> Contact Us</h1>
        <form className="myForm" onSubmit={handleSubmit}>

            <input type="text" value={firstname} onChange={(event)=>{setFirstname(event.target.value)}} className="input"  id='firstname' placeholder="Enter your first name.." />

            <input type="text" value={lastname} onChange={(event)=>{setLastname(event.target.value)}} className="input"  id='lastname' placeholder="Enter your last name.." />

            <input type="number" value={phone} onChange={(event)=>{setPhone(event.target.value)}} className="input"  id='phone' placeholder="Enter your phone.." />

            <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}  className="input"  id='email' placeholder="Enter your email.." />

            <button className='btn' type="submit">Submit</button>
        </form>
    </>)
}
export default Contact;