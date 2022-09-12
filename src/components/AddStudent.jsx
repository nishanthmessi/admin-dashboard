import { useState } from "react"

const AddStudent = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [batch, setBatch] =useState('')
  const [tech, setTech] = useState('')
  const [location, setLocation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name || !email || !batch || !tech || !location) {
      alert('please fill all fields')
      return
    }

    onAdd({name, email, batch, tech, location})

    setName('')
    setEmail('')
    setBatch('')
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
          <label>batch <span className="text-error">*</span></label>
          <input type="text" placeholder="type respective batch" className="input input-bordered input-primary w-full max-w-xs mb-8" value={batch} onChange={(e) => setBatch(e.target.value)}/>
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

export default AddStudent