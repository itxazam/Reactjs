import React, {  useState } from 'react';
import "./ContactApplication.css";
import axios from "axios"

const ContactApplication = () => {
 
  const [msg, setMsg] = useState('');
  const [user, setUser] = useState({
    fullname:"",
    to: "",
    phone:"",
    subject: "",
    description: ""
  });

  const { fullname, to, phone, subject, file , description}= user;

  const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async e=>{
    e.preventDefault();
    await axios.post("http://localhost:4000/send_email", user)
    .then(response => setMsg(response.data.respMesg));
  }

 
    return(
      <>
     
      <form  action="/contact" method="POST" id="employe" >
      <div className='container contact-heading'>
       <h3>Contact Us</h3>
        <div className='contact-form'>
          <div className='input-fields'>
            <input type="text" className='input' value={fullname} name="fullname" onChange ={onInputChange} placeholder='Full Name' required />
            <input type="text" className="input" placeholder="Email" name="to" onChange ={onInputChange} value={to} required />
            <input type="text" className='input' value={phone} name="phone" onChange ={onInputChange} placeholder='Phone' required />
            <input type="text" className='input' value={subject} name="subject" onChange ={onInputChange}  placeholder='Subject' required />
            <input type="file" className='input' value={file} name="myFile" onChange ={onInputChange} id="" />
            <div className='resultmessage'>{msg}</div>
          </div>
          <div className='message'>
          <textarea type="text"
             className="input" 
             placeholder="descriptiont"
            name="description"
            onChange ={onInputChange}
            value={description}
            />
            <div className='output'></div>
            <button type='submit' onClick={onSubmit} className='btn'>Submit</button>
          </div>  
          
         </div>   
        </div>
     </form>
  </>
  )
}

export default ContactApplication