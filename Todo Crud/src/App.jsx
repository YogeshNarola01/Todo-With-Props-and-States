import { useState } from "react"
import Adduser from "./Adduser"
import Viewuser from "./Viewuser"



function App() {
const [alldata,setAllData]=useState([])
 
  const addUser=(data)=>{
    setAllData([...alldata,data])
  };
  return (
    <>
      <Adduser
        addUser={addUser}
      />
      <Viewuser
        viewrecord={alldata}
      />
    </>
  )
}

export default App
