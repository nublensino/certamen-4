import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";


import { TodoItem } from "./TodoItem";



import {v4 as uuid} from "uuid";

export function Todolist(){

    //Inicializar las variables que estaba viendo reack
    //Por si sufren cambios
    //todos = NOMBRE DE LA CONSTANTE
    //setTodos = metodo que se va a utilizar para capturar modificaciones
    //useState = Usara un sate para capturar los estados
    //VIGILAREMOS EL ESTADO DEL ARREGLO
    

    const [todos, setTodos] = useState([
        {id:1, tarea:"vacaciones"} , {id:"2", tarea: "paseo "},
        {id:3, tarea:"viaje"} , {id:"4", tarea: "fiesta"}



    ]);

    

    const tareaRef = useRef();



    const agregarTarea = () =>{
        //alert("Agregando tarea....")

        const tarea = tareaRef.current.value;
        //alert(tarea);         
        const id = uuid();
        //alert(id);

        setTodos ((prevTodos) =>{
                const nuevaTarea = {
                    id:uuid(),
                    tarea: tarea
                }

                //3 PUNTITOS : TOMO EL ARREGLO NUEVO Y LO DESCOMPONGO
                //Y CON EL RETURN TOMO EL ARREGLO ANTIGUO Y LE SUMO LA TEREA NUEVA
                //RESULTANDO UN ARREGLO
                tareaRef.current.value = "";
                return [...prevTodos, nuevaTarea]
        })



    }












    return (
                <Fragment>      
                         

                         <h1>Mi Albúm</h1> 

                    <div className="input-group nt-4 mb-4">
                        <input ref={tareaRef} placeholder="Ingrese un título " className="form-control" type="text"></input>
                        <button onClick={agregarTarea} className="btn btn-success ns-2">+</button>

                    </div>

                     
                       <ul className="list-group">
                            <div className="raw">  
                                 <div className="col-2"> 
                             {todos.map((todo) => (
                            <TodoItem  todo={todo} key={todo.id} ></TodoItem>

                             ))}
                                </div>
                            </div>
                        </ul>  
                   
                        


                </Fragment>


    );
}