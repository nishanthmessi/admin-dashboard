import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import mentors from './data/MentorsData'
import students from "./data/StudentsData"
import LoadMentor from "./components/LoadMentor"
import EditMentor from "./components/EditMentor"
import LoadStudent from "./components/LoadStudent"
import EditStudent from "./components/EditStudent"

function App() {
  const [mentorData, setMentorData] = useState(mentors)
  const [studentData, setStudentData] = useState(students)

  useEffect(() => {
    const getMentors = async () => {
      const dataFromServer = await fetchMentors()
      setMentorData(dataFromServer)
    }

    getMentors()
  }, [])

  // Fetch Data
  const fetchMentors = async () => {
    const res = await fetch('https://629c40933798759975d2e679.mockapi.io/mentors')
    const data = await res.json()
    
    return data
  }

  // Add mentor
  const addMentor = async (mentor) => {
    const res = await fetch('https://629c40933798759975d2e679.mockapi.io/mentors', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(mentor)
    })

    const data = await res.json()

    setMentorData([...mentorData, data])
  }

  // Edit mentor
  const editMentor = async (id) => {
    const res = await fetch(`https://629c40933798759975d2e679.mockapi.io/mentors/${id}`, )
    const data = await res.json()
    console.log(data)
    }

  // delete mentor data
  const deleteUser = async (id) => {
    await fetch(`https://629c40933798759975d2e679.mockapi.io/mentors/${id}`, {
      method: 'DELETE',
    })

    setMentorData(mentorData.filter((user) => user.id !== id))
  }


  useEffect(() => {
    const getStudents = async () => {
      const dataFromServer = await fetchStudents()
      setStudentData(dataFromServer)
    }

    getStudents()
  }, [])

  // Fetch Data
  const fetchStudents = async () => {
    const res = await fetch('https://629c40933798759975d2e679.mockapi.io/students')
    const data = await res.json()
    
    return data
  }

  // Add student
  const addStudent = async (student) => {
    const res = await fetch('https://629c40933798759975d2e679.mockapi.io/students', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(student)
    })

    const data = await res.json()

    setStudentData([...studentData, data])
  }

  // Edit student data
  const editStudent = async (id) => {
    const res = await fetch(`https://629c40933798759975d2e679.mockapi.io/students/${id}`)
    const data = await res.json()
    return data 
  }

  // delete student data
  const deleteStudent = async (id) => {
    await fetch(`https://629c40933798759975d2e679.mockapi.io/students/${id}`, {
      method: 'DELETE',
    })

    setStudentData(studentData.filter((user) => user.id !== id))
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mentor' element={<LoadMentor mentorData={mentorData} onDelete={deleteUser} onAdd={addMentor} />} />
        <Route path='/updatementor' element={<EditMentor onUpdate={editMentor}/>} />
        <Route path="/student" element={<LoadStudent studentData={studentData} onDelete={deleteStudent} onAdd={addStudent} />} />
        <Route path='/updatestudent' element={<EditStudent onUpdate={editStudent}/>} />
      </Routes>
    </>
  );
}

export default App;
