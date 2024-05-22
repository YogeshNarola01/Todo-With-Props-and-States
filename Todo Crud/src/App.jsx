import { useState } from "react"
import Adduser from "./Adduser"
import Viewuser from "./Viewuser"
import './App.css'


function App() {
const [alldata,setAllData] = useState([])
const [single,setSingle] = useState("")
const [editid,setEditId] = useState("")
 
  const addUser=(data)=>{
    setAllData([...alldata,data])
  };

  const deletUser = (id) =>{
    setAllData(alldata.filter(val=>val.id != id))
  };

  const editUser = (id) =>{
    setSingle(alldata.find(val => val.id == id))
  };

  const updateUser = (data) =>{
    let up = alldata.map((val)=>{
      console.log(editid);
      if(val.id == editid){
        val.name = data.name
        val.phone = data.phone
      }
      return val;
    })
    setAllData(up)
    setEditId("")
  };

  return (
    <>
      <Adduser
        addUser={addUser}
        single = {single}
        editid = {editid}
        updateUser = {updateUser}
      /><hr />
      <Viewuser
        viewrecord={alldata}
        editUser = {editUser}
        deletUser={deletUser}
      />
    </>
  )
}

export default App
