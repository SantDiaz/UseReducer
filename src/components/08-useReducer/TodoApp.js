import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './style.css'
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import { useForm } from '../../hooks/useForm';


const init = () => {
  return JSON.parse(localStorage.getItem('todo')) || [];
}

export const TodoApp = () => {

    const [ todo, dispatch ] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
      description: ''
    });

    useEffect ( () => {
      localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo]);



    const handleDelete = ( todoId ) => {

      
      const actionDelete = {
        
        type: 'delete',
        payload: todoId
      }

      dispatch (actionDelete);
      // reset();
      
    }

    const handleToogle = (todoId ) => {

        dispatch({
          type: 'toogle',
          payload: todoId
        });
    }




        const handleSubmit = (e) => {

          e.preventDefault();

          if ( description.trim().length <= 1 ) {
            return;
          }

          const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done : false     
         };

         const action = {
           type: 'add',
           payload: newTodo
         }
         
         dispatch (action);
         reset();

        }


  return (
    <div>
       <h1>TodoApp ({ todo.length })</h1> 

       <hr/>
     
      <div className='row'>

      <div className=' col-7'>

      <ul className='list-group list.group-flush'>
       {
         todo.map ( (todo, i) => (
           <li 
                key= { todo.id }
                className = "list-group-item"
            >
                  <p 
                  onClick={() => handleToogle(todo.id)}
                  className={`${ todo.done && 'complete' }`}
                  >
                    {i + 1}. {todo.desc}
                    </p>
              <button 
                  onClick={ () => handleDelete (todo.id)}
                  className='btn btn-danger'
              >
                       Borrar
              </button>
           </li>
         ))
       }

       </ul>   
       </div>

    <div className='col-5'>
         <h4>Agregar</h4>
       <hr/>
         <form onSubmit={handleSubmit}>
           <input 
                  type="text"
                  name= "description"
                  className='form-control'
                  placeholder = "Aprender ..."
                  autoComplete='off'
                  value={description}
                  onChange = { handleInputChange } 
                  
           />
             <button
                  type='submit'
                  className='btn btn-outline-primary mt-1 btn-block'>
                      Agregar
             </button>
         </form>
   </div>

    </div>
      
    </div>
  )
}
