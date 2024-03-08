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

	return (
		<>
		<h1 className="text-center mt-5">LISTA DE TAREAS</h1>
		<div className="container border">
			<input className="container border-0 p-3" type="text" onChange={(event) => {setNewtarea(event.target.value)}} 
					onKeyDown={writetarea} value={newtarea} placeholder="Añadir nueva tarea"/>
					
				<ul className="list-group list-group-flush">
					{tareas.map((tarea,index) => {
						return (<li className="list-group-item" key={index}>{tarea}</li>)
					}
					)}	
				</ul>
				<div className="contador border-top p-3 text-muted"><span>Tareas diarias</span></div>
		</div>
		</>
	);
};

export default Home;
