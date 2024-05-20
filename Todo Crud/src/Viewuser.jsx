import React from 'react'

const Viewuser = ({viewrecord}) => {
  return (
    <div align="center">
        <h2>View User</h2>
        <table border={1}>
          <thead>
            <tr>  
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              viewrecord.map((val)=>{
                return(
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.phone}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delet</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Viewuser