import React from 'react'

const Viewuser = ({viewrecord,deletUser,editUser}) => {
  return (
    <div className='main' align="center">
        <h2>View User</h2>
        <table border={5}>
          <thead>
            <tr>  
              <th className='th'>Id</th>
              <th className='th'>Name</th>
              <th className='th'>Phone</th>
              <th className='th'>Salary</th>
              <th className='th'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              viewrecord.map((val)=>{
                return(
                  <tr key={val.id}>
                    <td className='td'>{val.id}</td>
                    <td className='td'>{val.name}</td>
                    <td className='td'>{val.phone}</td>
                    <td className='td'>₹ {val.salary}/-</td>

                    <td>
                      <button className='btn' onClick={()=>editUser(val.id)}>Edit</button>
                      <button className='btn' onClick={()=>deletUser(val.id)}>Delet</button>
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