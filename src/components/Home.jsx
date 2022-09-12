import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className='text-5xl font-bold mb-10'>Welcome Admin</h1>
        <p className="mb-2">Select which data you want to view</p>
        <div className="flex gap-4">
          <Link to="/mentor" className="btn">Mentors</Link>
          <Link to="/student" className="btn">Students</Link>
        </div>
      </div>
    </>
  )
}

export default Home