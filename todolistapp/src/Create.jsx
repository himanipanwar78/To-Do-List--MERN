import React, { useState } from 'react'
import './App'
import axios from 'axios'

function Create() {
   const [task, setTask] = useState()
   
   const handleAdd = () => {

    if (!task || task.trim() === "") {
    alert("Please Enter a Note!")
    }

    else{
      axios.post('http://localhost:3000/add', {task: task})
      .then(result => {
       location.reload()
      
      })
      .catch(err => console.log(err))
 
 
      
    }

    }

     
   
   
    return(

        <div className='sub-container'>

<input type="text" placeholder='Enter Your Note' onChange={(e) => setTask(e.target.value)} />
 <button type="button" onClick={handleAdd} >Add</button>
 
        </div>
    )
}

export default Create;