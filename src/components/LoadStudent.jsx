import { useState } from 'react'
import Student from '../pages/Student'
import AddStudent from "../components/AddStudent"

const LoadStudent = ({ studentData, onDelete, onAdd, onUpdate }) => {
  const student = studentData

  const [showAddStudent, setshowAddStudent] = useState(false)

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold my-10'>Students</h1>
        <div className="overflow-x-auto w-screen px-20">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th className='text-lg'>Name</th>
                <th className='text-lg'>Email</th>
                <th className='text-lg'>batch</th>
                <th className='text-lg'>Tech</th>
                <th className='text-lg'>Location</th>
               
                <th className='text-lg'>Edit</th>
                <th className='text-lg'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {student.map((data, index) => (
                <Student key={index} student={data} onDelete={onDelete} onUpdate={onUpdate}/>
              ))}                                    
            </tbody>          
          </table>
                   
        </div>
        <div className='flex justify-center items-center mt-10 gap-2'>
            <p>Add new student</p>
            <button 
              className={`btn btn-circle text-2xl font-medium ${showAddStudent ? 'btn-error' : 'btn-primary'}`} 
              onClick={() => setshowAddStudent(!showAddStudent)}>
                {showAddStudent ? '×' : '+'}
            </button>
          </div> 
        {showAddStudent && <AddStudent onAdd={onAdd}/>}
      </div>
      
    </>
  )
}

export default LoadStudent