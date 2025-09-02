import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	let [todoInput,updateinput]=useState()
	let [todo,updateTodo]=useState([
		{
			id:1,
			task:'learn react'
		},
		{
			id:2,
			task:'learn react1'
		}
		
	])
	function Adding(){
		let nextId=2;
		if(todoInput.trim()===" ")
		{
			alert("Add some task")
		}
		else{
			let a=
				{
					id: todo.length + 1,
					task:todoInput
				}
			
			updateTodo([...todo,a]);
			updateinput("");
		}
		
		
	}
  function delet(id) {
    let filteredTodos = todo.filter((item) => item.id !== id);
    updateTodo(filteredTodos);
  }
  return (
		<div className="container mt-5 w-50">
			<h2 className='text-center'>Todo App using React</h2>
			<div className='input-group'>
           <input
            	className="form-control"
             	type="text"
             	value={todoInput}
             	onChange={(e) => updateinput(e.target.value)}
           />
				<button className='btn btn-primary' onClick={Adding}>Add</button>
			</div>
			<ul className='list-group mt-4'>
			{	
				todo.map(
					(todo) => {
						return(
							<li className='list-group-item'>
									<p>{todo.task}</p>
									<button className='btn' onClick={()=>{
										delet(todo.id)
									}}>❌</button>
							</li>
						)
					}
				)
			}	
			</ul>
		</div>
  );
}

export default App;

