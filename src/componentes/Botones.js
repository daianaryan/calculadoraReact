import React from 'react';
/* importo para utilizar mi componente boton */
import Boton from './Boton'

/* importo los arreglos que se encuentran declarados en el archivo Arreglos.js */
import { caracteres } from '../aplicacion/Arreglos'
import { caracteresSimples } from '../aplicacion/Arreglos'

/* Representara con jsx los botones totales de la calculadora */

const Botones = () => {
    /* disparara un bucle el cual ira armando cada boton con la informacion que le pasare
    de los arreglos anteriormente importados, esto entregara 1 caracter a cada boton */
    return (
        <div>
            <div className="botones">
                {caracteres.map((element, index) =>
                /* a traves de props pasare la informacion del caracter */
                    <Boton data={element} key={index} index={index} />
                )}
            </div>
            <div className="version-mobile">
                <div className="botones-mobile">
                    {caracteresSimples.map((element, index) =>
                        /* a traves de props pasare la informacion del caracter */
                        <Boton data={element} key={index} index={index} />
                    )}
                </div>
            </div>
        </div>
    );
};
/* NOTA : los botones que se arman debajo que corresponden a botones simples solo se van a ver
en la version movil ya que el diseño cuenta con mediaquerys donde convierten la calculadora 
cientifica en una calculadora un poco mas basica con menos botones  */

export default Botones;