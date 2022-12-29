import React from 'react';
/* importo un useContext declarado en el provider esto es para asociar la funcion ingresOValores */
import { useIngresarValor } from '../aplicacion/UserProvider';

const Boton = (props) => {

    /* creo la constante y la igualo a la funcion ya importada */
    const ingresarValor = useIngresarValor();

    /* retorno un div que sera del boton con el onClick asociado a la funcion del provider 
    y ademas le agrego al valor el caracter pasado por props que su componente padre le pasa */
    return (
        <div id="teclado" className={'div' + (props.index + 1)}>
            <button type="button" className="btn" onClick={ingresarValor} value={props.data}>{props.data}</button>
        </div>
    );
};

export default Boton;
