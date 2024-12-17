import "../components/inicio.css"
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';

export default function Inicio(params) {
    return(

        <div className="inicio">
            <div className="container">


            <div className="hol">
            <span className="hola">
          {/* Style will be inherited from the parent element */}
          <Typewriter
             onInit={(typewriter) => {
                typewriter.typeString('Hola!, Mi nombre es Ivan Molina')
                  .callFunction(() => {
                  })
                  .pauseFor(2500)
             
                  .start();
              }}
          />
        </span>

            </div>
            <div className="parr">

                 <p className="parrafo">Desarrollador React con sólida experiencia en el desarrollo de aplicaciones móviles para Android. Especializado en la implementación de interfaces de usuario responsivas y optimizadas.</p>

            </div>
            </div>
     


        </div>
    )
}