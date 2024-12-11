import React, { useEffect, useState } from 'react'
import Create from './Create'
import './App'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';


function Home() {
 const [todos, setTodos] = useState([])
 useEffect(() => {
    axios.get('http://localhost:3000/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
 }, [])


 const handleEdit = (id) => {
  axios.put('http://localhost:3000/update/' +id)
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
 
 }

 const handleDelete = (id) => {
  axios.delete('http://localhost:3000/delete/' +id)
  .then(result => {
    location.reload()
  })
  .catch(err => console.log(err))
 }
 
 return (
    <div className='container'>
           

        <h2>ToDo List</h2>
        <Create/>
        {
            todos.length === 0 
            ?
            <div><h4>No Record Found</h4></div>

            :

            todos.map(todo => (
                <div className='task'> 
                <ul>
  <li className="todo-item">
    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
    {todo.done ? 
    
    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
    : <FontAwesomeIcon icon={faCircle} className='icon'></FontAwesomeIcon>
  
  }

    </div>

    <span className={todo.done ? "line_through" : ""}>{todo.task} </span>
    <button className="todo-button">
      <FontAwesomeIcon icon={faTrash} className="icon-trash" onClick={() => handleDelete(todo._id)} />
    </button>
  </li>
</ul>

                  </div>
                 
              

            ))
        }
    </div>
 )

   
}

export default Home;