import React, { useState } from 'react';
import '../components/contacto.css';
import Formulario from './minicomponents/Formulario';

// Place the Devicon link here for better organization

export default function Contacto() {
  const [name, setName] = useState('');

  return (
    <div className="contacto">
      <h1 className='Titlee'>Contacto</h1>
      <div className="icons">
        <div class="social-icons">

          <a class="Github" href='https://github.com/ivan200789' >
            <svg viewBox="0 0 128 128">
              <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
            </svg>
          </a>

          <a class="Linkedin" href='https://www.linkedin.com/in/ivan-molina-25b42325a/'>    

          <svg viewBox="0 0 128 128">
            <path fill="#1d1d1b" d="M.85 52.73h4.94v17.98h9.14v4.56H.85V52.73zM17.11 60h4.74v15.26h-4.74zm2.37-7.59a2.75 2.75 0 11-2.75 2.75 2.75 2.75 0 012.75-2.75M41.69 52.73h4.74V66.2l5.38-6.22h5.81l-6.22 7.07 6.09 8.22h-5.96l-5.04-7.55h-.06v7.55h-4.74V52.73zM24.48 60H29v2.09h.06a5 5 0 014.49-2.47c4.81 0 5.69 3.16 5.69 7.27v8.38h-4.7v-7.43c0-1.77 0-4-2.47-4s-2.85 1.93-2.85 3.92v7.55h-4.74z"></path><path fill="#1d1d1b" d="M67.61 65.85a2.84 2.84 0 00-2.91-2.91 3.16 3.16 0 00-3.35 2.91zm4 6.77a8.35 8.35 0 01-6.48 3c-4.74 0-8.54-3.16-8.54-8.07s3.8-8.06 8.54-8.06c4.43 0 7.21 3.16 7.21 8.06v1.49h-11a3.54 3.54 0 003.57 3 4 4 0 003.38-1.87zM82.23 63.68A3.89 3.89 0 1086 67.57a3.6 3.6 0 00-3.8-3.89m8.2 11.58H86v-2a6 6 0 01-4.71 2.4c-4.56 0-7.56-3.29-7.56-7.94 0-4.27 2.66-8.19 7-8.19a5.73 5.73 0 014.87 2h.06v-8.8h4.74z"></path><path fill="#0076b2" d="M124.78 48H97.51a2.34 2.34 0 00-2.36 2.31v27.38A2.34 2.34 0 0097.51 80h27.27a2.34 2.34 0 002.37-2.31V50.31a2.34 2.34 0 00-2.37-2.31z"></path><path fill="#fff" d="M99.89 60h4.75v15.27h-4.75zm2.37-7.59a2.75 2.75 0 11-2.75 2.75 2.75 2.75 0 012.75-2.75M107.61 60h4.55v2.09h.06a5 5 0 014.49-2.47c4.81 0 5.69 3.16 5.69 7.27v8.38h-4.74v-7.43c0-1.77 0-4-2.47-4s-2.85 1.93-2.85 3.92v7.55h-4.74z"></path>
            </svg>
          
             
          </a>
          <a className="Portfolio" href="https://issuu.com/ivan20078/docs/cv_sin_foto_trabajo_formal_joven_blanco_azul_">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path></svg>

          </a>
          <Formulario/>
        </div>

      </div>

    </div>
  );
}