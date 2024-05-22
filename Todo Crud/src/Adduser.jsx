import React, { useEffect, useState } from 'react'

const Adduser = ({addUser,single,editid,updateUser}) => {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [salary,setSalary]=useState("")

    useEffect(()=>{
      setName(single.name);
      setPhone(single.phone);
      setSalary(single.salary)
    },[single]);

    const handleSubmite = (e) => {
      e.preventDefault();
  
      if (!name || !phone || !salary) {
          alert("Please enter both name and phone number.");
          return;
      }
  
      let obj = {
          id: Date.now(),
          name: name,
          phone: phone,
          salary:salary,
      };
      if (editid) {
          updateUser(obj);
      } else {
          addUser(obj);
      }
  
      setName("");
      setPhone("");
      setSalary("");
  };

  return (
    <div className='main' align="center">
        <h2>Add User</h2>
        <form onSubmit={handleSubmite}>
        Name : <input className='input' type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} value={name || ""}/> &nbsp;
        Phone : <input className='input' type="number" placeholder='Enter Youre Phone Number' onChange={(e)=>setPhone(e.target.value)} value={phone || ""}/>&nbsp;
        Salary : <input className='input' type="number" placeholder='Enter Youre Salary In ₹' onChange={(e)=>setSalary(e.target.value)} value={salary || ""}/>&nbsp;
        <button className='btn'>Submite</button>
        </form>
    </div>
  )
}

export default Adduser