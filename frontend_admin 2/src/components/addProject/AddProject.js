import React from 'react'
import './AddProject.css'
const AddProject = () => {
  return (
    <div className='motherContainer'>
      <div className='projectContainer'>
      <h1>Add another project</h1>
      <h3>Title:</h3>
      <input />
      <h3>Description:</h3>
      <input />
      <h3>Image:</h3>
      <input type="file" id="file" 
      accept=".jpg"
      multiple
      className='project_img'/>
      <h3>Url:</h3>
      <input />
      <h3>Ordinal:</h3>
      <input />
      </div>
      <button>Submit</button>
    </div>
    
  )
}

export default AddProject
