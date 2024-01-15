import React from 'react'

function CreateNote() {
  return (
    <div className='notedtext'>
      {/* <label htmlFor="notes">Note</label> */}
      <textarea id="notes" placeholder='Write your notes here...' name="mynote"  cols="30" rows="10"></textarea>

        
    </div>
  )
}

export default CreateNote