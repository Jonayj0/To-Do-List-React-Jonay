import React, { useState } from "react";


//create your first component
const Home = () => {

 const [newTask,setNewTask]=useState("")
 const [tasks,setTasks]=useState([])
 
////// -------------Esta funcion añade una task nueva en el Array al presionar ENTER----------------------////
	function writeTask(event) {
		// console.log(event);
		if (event.key === "Enter") {
			// console.log("Agregar task");
			setTasks(tasks.concat(newTask))
			setNewTask("");
		}
	}

 ////// -------------Esta funcion elimina una position del Array por su indice----------------------////
	function deletetask(position) {
		const arrayfiltered = tasks.filter((item, index) => index !== position)
		setTasks(arrayfiltered)
		}

	return (
		<>
		<h1 className="text-center mt-5"><b>LISTA DE TAREAS</b></h1>
		<div className="blog container">
			<input className="list container border-0 py-3" type="text" 
					onChange={(event) => {setNewTask(event.target.value)}} 
					onKeyDown={writeTask} value={newTask} placeholder="Añadir nueva tarea"/>
					
			<ul className="list-group list-group-flush">
					{tasks.map((task,index) => { return (<li className="list-group-item py-3 ms-3" key={index}> {task}   
						<span className="delete" onClick={() => deletetask(index)}><i className="fa-solid fa-xmark"></i></span></li>)
					}
					)}	
			</ul>
				<div className="contador border-top p-3"><span>{tasks.length} tasks</span></div>	
		</div>
		</>
	);
};

export default Home;



//  function deletetask(indextask) {
// 	const taskEliminada = tasks.filter((task, index) => index !== indextask);
// 	settasks(taskEliminada);
// 	}


{/* <button className="btn text-danger border-0" onClick={() => deletetask(index)}><i className="fa-solid fa-xmark" ></i></button> */}