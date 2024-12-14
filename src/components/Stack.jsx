import "../components/stack.css"
import React from 'react';
import { Carrusel } from "./minicomponents/Carrusel";
export default function Stack() {
    
    return(
      <>
      <div className="contenedor">
        <h1 className="stack">Stack</h1>
      </div>
        <Carrusel/>
      
      </>
        
    )
}