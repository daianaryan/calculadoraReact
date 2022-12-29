import React from 'react';
/* importo los useContext que se encuentran en provider */
import { useMostrarSubtotal, useMostrarValor, useMostrarOperacion, useMostrarMemoria} from '../aplicacion/UserProvider';

const Visor = () => {

    /* declaro mis constantes para poder asignarlos a lo importado */
    const valor = useMostrarValor();
    const operacion = useMostrarOperacion();
    const subtotal = useMostrarSubtotal();
    const memoria = useMostrarMemoria();

    /* retorno un div que contendra la informacion del display */
    return (
        <div>
            <div className="d-flex w-auto">
                <div className="col-md-4 w-50">
                    <p>Calculadora</p>
                </div>
                <div className="col-md-8 d-flex justify-content-end w-50">                         
                    <a className="iconExe" href="#"><span className="material-symbols-outlined">minimize</span></a>
                    <a className="iconExe" href="#"><span className="material-symbols-outlined">close</span></a>
                </div>
            </div>
            <div id="pantalla" type="textfield" name="ans" value="" className="d-flex align-items-end flex-column justify-content-between centrar">                    
                <div id="visor" className="fw-bold" type="textfield" name="ans" value="">
                    <p id="in-resultado" className="text-black mt-3"  name="in-resultado" maxLength="16">{valor}</p>                                             
                </div>
            </div> 
        </div>
    );
};

/* NOTA : Tener en cuenta que como aun se encuentra en desarrollo el contenido del div 
    #in-subtotal debera de ser ocultado por css, ya que la idea sera siempre mostrar el resultado total. */

export default Visor;