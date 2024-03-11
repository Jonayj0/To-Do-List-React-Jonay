import React, { useState } from "react";


//create your first component
const Home = () => {

 const [newtask,setNewtask]=useState("")
 const [tasks,settasks]=useState([])
 
////// -------------Esta funcion añade una task nueva en el Array al presionar ENTER----------------------////
	function writetask(event) {
		// console.log(event);
		if (event.key === "Enter") {
			// console.log("Agregar task");
			settasks(tasks.concat(newtask))
			setNewtask("");
		}
	}
////// -------------Esta funcion añade una una task nueva en el Array al presionar ENTER----------------------////


 ////// -------------Esta funcion elimina una position del Array por su indice----------------------////
	function deletetask(position) {
		const arrayfiltered = tasks.filter((item, index) => index !== position)
		settasks(arrayfiltered)
		}
////// -------------Esta funcion elimina una position del Array por su indice----------------------////

	return (
		<>
		<h1 className="text-center mt-5"><b>LISTA DE TAREAS</b></h1>
		<div className="blog container">
			<input className="list container border-0 py-3" type="text" 
					onChange={(event) => {setNewtask(event.target.value)}} 
					onKeyDown={writetask} value={newtask} placeholder="Añadir nueva tarea"/>
					
			<ul className="list-group list-group-flush">
					{tasks.map((task,index) => { return (<li className="list-group-item py-3 ms-3" key={index}> {task}   
						<span className="delete hidden" onClick={() => deletetask(index)}> <i className="fa-solid fa-xmark" ></i></span></li>)
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