import { useState } from 'react'
import Mentor from '../pages/Mentor'
import AddMentor from "../components/AddMentor"

const LoadMentor = ({ mentorData, onDelete, onAdd, onUpdate }) => {
  const mentor = mentorData

  const [showAddMentor, setShowAddMentor] = useState(false)

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold my-10'>Mentors</h1>
        <div className="overflow-x-auto w-screen px-20">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th className='text-lg'>Name</th>
                <th className='text-lg'>Email</th>
                <th className='text-lg'>Tech</th>
                <th className='text-lg'>Location</th>
                
                
                <th className='text-lg'>Edit</th>
                <th className='text-lg'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {mentor.map((data, index) => (
                <Mentor key={index} mentor={data} onDelete={onDelete} onUpdate={onUpdate} />
              ))}                                    
            </tbody>          
          </table>
                   
        </div>
        <div className='flex justify-center items-center mt-10 gap-2'>
            <p>Add new mentor</p>
            <button 
              className={`btn btn-circle text-2xl font-medium ${showAddMentor ? 'btn-error' : 'btn-primary'}`} 
              onClick={() => setShowAddMentor(!showAddMentor)}>
                {showAddMentor ? '×' : '+'}
            </button>
          </div> 
        {showAddMentor && <AddMentor onAdd={onAdd}/>}
      </div>
      
    </>
  )
}

export default LoadMentor