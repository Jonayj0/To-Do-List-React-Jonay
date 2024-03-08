import React, { useState } from "react";


//create your first component
const Home = () => {

 const [newtarea,setNewtarea]=useState("")
 const [tareas,setTareas]=useState([])
 

 function writetarea(event) {
	// console.log(event);
	if (event.key === "Enter") {
		// console.log("Agregar tarea");
		setTareas(tareas.concat(newtarea))
		setNewtarea("");
	}
 }

// function deleteTarea(event) {
// 	console.log(event);
// }


	return (
		<>
		<h1 className="text-center mt-5"><b>LISTA DE TAREAS</b></h1>
		<div className="container border">
			<input className="list container border-0 py-3" type="text" onChange={(event) => {setNewtarea(event.target.value)}} 
					onKeyDown={writetarea} value={newtarea} placeholder="Añadir nueva tarea"/>
					
			<ul className="list-group list-group-flush">
					{tareas.map((tarea,index) => {
						return (<li className="list-group-item py-3 ms-3" 
						key={index} onClick={(event) => {}}>{tarea} 
						<button className="btn text-danger border-0"><i className="fa-solid fa-xmark" ></i></button></li>)
					}
					)}	
			</ul>
				<div className="contador border-top p-3"><span>{tareas.length} Tareas</span></div>	
		</div>
		</>
	);
};

export default Home;





			// <ul class="list-group m-5">
			// 	<li class="list-group-item"><input className="list container border-0" type="text" onChange={(event) => {setNewtarea(event.target.value)}} 
			// 		onKeyDown={writetarea} value={newtarea} placeholder="Añadir nueva tarea"/></li>
			// 	{tareas.map((tarea,index) => {
			// 			return (<li className="list-group-item" key={index}>{tarea}</li>)
			// 		}
			// 		)}	
			// 	<li class="list-group-item"><div className="contador"><span>{tareas.length} Tareas</span></div></li>
			// </ul>