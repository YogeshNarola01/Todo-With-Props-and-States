import React, { useState } from 'react'

const Adduser = ({addUser}) => {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")

    const handleSubmite = (e)=>{
        e.preventDefault()
        let obj={
            id : Date.now(),
            name,
            phone
        }
        addUser(obj)
        setName("")
        setPhone("")
    }
  return (
    <div align="center">
        <h2>Add User</h2>
        <form onSubmit={handleSubmite}>
        Name : <input type="text" onChange={(e)=>setName(e.target.value)} value={name || ""}/> &nbsp;
        Phone : <input type="number" onChange={(e)=>setPhone(e.target.value)} value={phone || ""}/>&nbsp;
        <button>Submite</button>
        </form>
    </div>
  )
}

export default Adduser