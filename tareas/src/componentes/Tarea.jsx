import React from 'react';
import '../hojas-de-estilo/tareas.css'
import { TbTrash } from "react-icons/tb";

function Tarea( {id, texto, completada, completarTarea, eliminarTarea} ){
    return (
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' } >
        <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}
        >
        {texto}
        </div>
        <div className='tarea-contenedor-iconos'
        onClick={ () => eliminarTarea(id)}>
          <TbTrash className='tarea-icono' />
        </div>
      </div>
    );
}


export default Tarea;