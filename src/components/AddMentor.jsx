import { useState } from "react"

const AddMentor = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tech, setTech] = useState('')
  const [location, setLocation] = useState('')
  
  

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name || !email || !tech || !location) {
      alert('please fill all fields')
      return
    }

    onAdd({name, email, tech, location})

    setName('')
    setEmail('')
    setTech('')
    setLocation('')
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <label>Full name <span className="text-error">*</span></label>
          <input type="text" placeholder="type name" className="input input-bordered input-primary w-full max-w-xs mb-8" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>email <span className="text-error">*</span></label>
          <input type="text" placeholder="type name" className="input input-bordered input-primary w-full max-w-xs mb-8" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>tech <span className="text-error">*</span></label>
          <input type="text" placeholder="type your main technology" className="input input-bordered input-primary w-full max-w-xs mb-8" value={tech} onChange={(e) => setTech(e.target.value)} />
        </div>
        <div>
          <label>location <span className="text-error">*</span></label>
          <input type="text" placeholder="type location" className="input input-bordered input-primary w-full max-w-xs mb-8" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="flex justify-center items-center">
          <input type="submit" value='Save' className="btn"/>
        </div>        
      </form>
    </>
  )
}

export default AddMentor