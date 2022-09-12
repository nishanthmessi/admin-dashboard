const EditMentor = () => { 
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 font-bold text-3xl">Edit</h1>
      <form className="form">
        <div>
          <label>Full name <span className="text-error">*</span></label>
          <input type="text" placeholder="type full name" className="input input-bordered input-primary w-full max-w-xs mb-8"/>
        </div>
        <div>
          <label>email <span className="text-error">*</span></label>
          <input type="text" placeholder="type name" className="input input-bordered input-primary w-full max-w-xs mb-8" />
        </div>
        <div>
          <label>tech <span className="text-error">*</span></label>
          <input type="text" placeholder="type your main technology" className="input input-bordered input-primary w-full max-w-xs mb-8"  />
        </div>
        <div>
          <label>location <span className="text-error">*</span></label>
          <input type="text" placeholder="type location" className="input input-bordered input-primary w-full max-w-xs mb-8"/>
        </div>
        <div className="flex justify-center items-center">
          <input type="submit" value='Save' className="btn"/>
        </div>        
      </form>
      </div>
    </>
  )
}

export default EditMentor