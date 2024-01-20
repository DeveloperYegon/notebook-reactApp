import React from 'react'
import Welcome from './Welcome';
import CreateNote from './CreateNote'

function Notes() {
  return (
    <div className="notes">
        <Welcome/>
        <CreateNote/>
        <CreateNote/>

        <CreateNote/>
          
        <CreateNote/>

    </div>
  )
}

export default Notes