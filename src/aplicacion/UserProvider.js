/* Realizo importaciones para los hooks que voy a utilizar */
import React, { useState, useContext, useEffect } from "react";
/* Importo mis arreglos, numeros y cortadores contienen caracteres y funcionesMath contiene objetos con funciones Matematicas*/
import { numeros, cortadores, funcionesMath } from './Arreglos';

/* Declaro mis variables de contexto */
const ingresarValor = React.createContext();
const mostrarValor = React.createContext();
const mostrarSubtotal = React.createContext();
const mostrarOperacion = React.createContext();
const mostrarMemoria = React.createContext();

/* Declaro las funciones que me van a permitir llamar a las variables de contexto */
export function useIngresarValor() {
    return useContext(ingresarValor);
}

export function useMostrarValor() {
    return useContext(mostrarValor);
}

export function useMostrarSubtotal() {
    return useContext(mostrarSubtotal);
}

export function useMostrarOperacion() {
    return useContext(mostrarOperacion);
}

export function useMostrarMemoria() {
    return useContext(mostrarMemoria);
}

/* Creo UserProvider que va a contener toda la logica de la programacion */
export function UserProvider(props) {

    /* Constante de valor inicial para el hook operaciones  */
    const valorInicial = { num1: 0, op: "", num2: 0 };

    /* Declaro mis hooks de estados para utilizar en la logica : */
    /* valor : lo utilizo para mostrar el resultado. */
    const [valor, setValor] = useState("");
    /* operacion : lo utilizo para organizar la operacion a realizar 
    guardara la informacion para numero1 , numero2 y el valor a operar */
    const [operacion, setOperacion] = useState(valorInicial);
    /* memoria : un estado que guarda un numero que el usuario necesite guardar. */
    const [memoria, setMemoria] = useState(0);
    /* subtotal : este hook se encargara siempre de guardar el resultado de la operacion
    el mismo podra ser llamado o no dentro de setValor para ser mostrador por display */
    const [subtotal, setSubtotal] = useState(0);
    /* resultado : se utilizara para guardar el resultado FIJO */
    const [resultado, setResultado] = useState(0);
    /* completo : hook de tipo banderin, requiero esta variable para poder saber cuando
    y cuantas veces se preciona un boton de tipo cortador */
    const [completo, setCompleto] = useState({ estado: false, conteo: 0 });

    /* Declaro mis useEffects a utilizar , preciso de estos para poder ir contra la asincronia 
    de los setState que utilizo en cada funcion, teniendo estos puedo dar con la informacion de los estados
    de forma actualizada */

    /* para cada ves que se setee 'setOperacion' disparare este llamado */
    useEffect(() => {
        /* siempre y cuando operacion no contenga el valor inicial , disparar funcion */
        if (operacion !== valorInicial) {
            realizarOperacion();
        }
    }, [operacion])// eslint-disable-line react-hooks/exhaustive-deps

    /* para cada ves que se setee 'setSubtotal' disparare este llamado */
    useEffect(() => {
        if (subtotal !== 0) {
            darResultado('none');
        }
    }, [subtotal]);// eslint-disable-line react-hooks/exhaustive-deps

    /* Declaro mis funciones de logica */

    /* funcion de ingreso , esto se va a dispara siempre que un boton sea precionado */
    const ingresoValores = (e) => {

        /* declaro variables para poder capturar el contenido
         del display y concatenarlo para posteriormente asignarlo */
        let ingreso = e.target.value;
        let valorActual = document.getElementById('in-resultado').innerHTML;
        let valorConcatenado = 0;

        /* siempre que lo que ingrese corresponda a un numero entonces entrara en este if */
        if (numeros.includes(ingreso)) {

            if( ingreso === "."){
                /* si ingresa una coma el valor concatenado no se debe de convertir en un numero */
                valorConcatenado = "";
                valorConcatenado += valorActual + ingreso;
            }else{
                /* es un numero entonces debera de ser concatenado para poder formarse  */
            valorConcatenado += Number(valorActual + ingreso);
            }

            setValor(valorConcatenado);

            /* realizo asignacion de numero en el hook operacion
                aplicando banderin correspondiente  */

            if (completo.conteo > 1) {
                /* seteo operacion le asigno al primer numero el valor de 'subtotal' 
                la operacion dejo la que ya tenia guardada y a numero 2 le agrego el valor concatenado */
                setOperacion({ ...operacion, num1: resultado, op: operacion.op, num2: valorConcatenado });
            } else {
                /* de no estar levantado el banderin de conteo entonces : implica que la calculadora recien comienza */
                if (completo.estado === false) {
                    /* asignara a operacion el valorConcatenado al primer numero siempre hasta que el banderin cambie a verdadero */
                    setOperacion({ ...operacion, num1: valorConcatenado, op: operacion.op, num2: operacion.num2 });
                } else {
                    /* asignara a operacion el valorConcatenado el segundo numero siempre hasta el banderin cambie de conteo */
                    setOperacion({ ...operacion, num1: operacion.num1, op: operacion.op, num2: valorConcatenado });
                }
            }
            /* *Recordatorio* : siempre que setOperacion es llamado , se ejecuta el useEffect descrito arriba */
        }

        /* si lo que ingresa corresponda a un caracter de tipo cortador entonces entra en este if */
        if (cortadores.includes(ingreso)) {

            if (ingreso === "(" || ingreso === ")" || ingreso === "ⁿ√" || ingreso === "%" || ingreso === "+/-"){
                return noHabilitado();
            }
            /* levanto banderin para que el proceso de asignacion de numeros cambie */
            setCompleto({ ...completo, estado: true, conteo: completo.conteo + 1 });

            if (subtotal !== 0 ){
                setResultado(subtotal);
            }
            
            /* ejecuto mi switch y pregunto que caracter ingreso, dependiendo el contenido realizo funcion */
            switch (ingreso) {
                case "AC":
                    /* ejecuto limpiar el display */
                    limpiarDisplay();
                    break;
                case "MR":
                    /* ejecuto guardar en memoria */
                    guardarEnMemoria();
                    break;
                case "=":
                    /* tomo lo que se encuentra dentro de subtotal y lo presento como resultado en el display */
                    darResultado(ingreso);
                    break;
                case "e":
                    /* este es el unico boton que dicha funcion no contiene parametros para ser ejecutado , simplemente da el resultado 
                    seteo operaciones para que solo asignando el valor de la operacion la misma de el resultado  */
                    setOperacion({ ...operacion, num1: operacion.num1, op: ingreso, num2: operacion.num2 });
                    break;
                case "ᴨ":
                    /* este es el unico boton que dicha funcion no contiene parametros para ser ejecutado , simplemente da el resultado 
                    seteo operaciones para que solo asignando el valor de la operacion la misma de el resultado  */
                    setOperacion({ ...operacion, num1: operacion.num1, op: ingreso, num2: operacion.num2 });
                    break;
                default:
                    /* por default se entederan todos los caracteres que no sean 
                    descritos en el case por lo que casi siempre la programacion seguira esta linea  */
                    asignarOperacion(ingreso);
            }
        }

    }

    /* funcion de asignar, asignara lo que ingresa segun correspondan ciertos requisitos de banderin */
    const asignarOperacion = (arg) => {
        /* cuando el numero2 de operacion no sea 0 */
        if (operacion.num2 === 0) {
            /* asignare el arg a la operacion  */
            setOperacion({ ...operacion, num1: operacion.num1, op: arg, num2: 0 });
            /* si el primer numero no es 0 y el segundo numero tampoco es cero */
        } else if (operacion.num1 !== 0 && operacion.num2 !== 0) {
            /* implicara que el subtotal contiene informacion 
            por lo que asignare a numero1 el subtotal  */
            setOperacion({ ...operacion, num1: subtotal, op: arg, num2: 0 });
        }
        /* si numero2 es igual a 0 y subtotal no es 0 */
        if (operacion.num2 === 0 && subtotal !== 0) {
            /* implicara que el subtotal contiene informacion 
            por lo que asignare a numero1 el subtotal (esto puede ser optimizado en la logica) */
            setOperacion({ ...operacion, num1: subtotal, op: arg, num2: 0 });
        }
        /* despues de cada seteo siempre pondre el display en vacio */
        setValor("");
    }

    /* funcion que limpia el display y formatea los Hooks a sus valores iniciales */
    const limpiarDisplay = () => {
        /* seteo los valores a sus valores iniciales  */
        setValor("");
        setOperacion(valorInicial);
        setSubtotal(0);
        setCompleto({ ...completo, estado: false, conteo: 0 })
    }

    /* funcion que guarda un numero en memoria */
    const guardarEnMemoria = () => {
        if (memoria === 0) {
            setMemoria(Number(document.getElementById("in-resultado").innerHTML));
            limpiarDisplay();
            alert('El numero del visor se guardo en memoria.');
        } else {
            setValor(memoria);
            setOperacion({ ...operacion, num1: memoria, op: operacion.op, num2: 0 });
            setMemoria(0)
        }
    }

    /* funcion que realiza la operacion de valga la redundancia el hooks operacion 
    recordar que para cuando el programa llego a esta funcion el useEffect fue ejecutado 
    y los valores asignados se encuentran actualizados correctamente. */
    const realizarOperacion = () => {
        /* siempre que el ingreso de la operacion contenga un caracter cortador (+,-,*,cos) ingresara en el if*/
        if (operacion.op !== "") {
            /* Recorrere el arreglo funcionesMath para buscar concidencias del elemento del arreglo con los parametros que tiene el hooks 'operacion' */
            funcionesMath.forEach(element => {
                /* implicara que la operacion a realizar solo contiene 1 parametro */
                if (element.params === 1 && element.id === operacion.op) {
                    let resultado = Number(element.operar(operacion.num1));
                    setSubtotal(resultado);
                    setValor(resultado);
                    /* implicara que la operacion a realizar contendra 2 parametros y que 'operacion' contiene un valor en el numero2 */
                } else if (element.params === 2 && element.id === operacion.op && operacion.num2 > 0) {
                    let resultado = Number(element.operar(operacion.num1, operacion.num2));
                    setSubtotal(resultado);
                    /* implicara que la operacion no contiene ningun parametro para ser ejecutada */
                } else if (element.params === 0 && element.id === operacion.op) {
                    let resultado = Number(element.operar());
                    setSubtotal(resultado);
                    setValor(resultado);
                }
            });
        }
        /* En esta funcion se setea subtotal, por lo que hay que tener en cuenta que para cuando 
        llega aca al terminar pasara por useEffect de subtotal declarado arriba y disparara la funcion darResultado */
    }

    /* funcion que da el resultado y lo muestra en display dependiend de un criterio */
    const darResultado = (arg) => {

        /* siempre y cuando el valor de arg NO sea none */
        if (arg !== 'none') {
            setValor(subtotal);
            /* 'entrego el valor total en display' */
        }

    }

    /* funcion de desarrollo para los funciones aun no habilitadas */
    const noHabilitado = () => {
        alert('Lo Lamento, esta funcion aun no se encuentra habilitada.')
    }
    /* Retorno el provider y todas los valores para mostrar resultado y la funcion de ingresarValores
    en esta parte se asocian los useContext que fueron declarados arriba con los hooks que son declarados dentro del UserProvider  */
    return (
        <mostrarOperacion.Provider value={operacion}>
            <mostrarSubtotal.Provider value={subtotal}>
                <mostrarValor.Provider value={valor}>
                    <mostrarMemoria.Provider value={memoria}>
                        <ingresarValor.Provider value={ingresoValores}>
                            {props.children}
                        </ingresarValor.Provider>
                    </mostrarMemoria.Provider>
                </mostrarValor.Provider>
            </mostrarSubtotal.Provider>
        </mostrarOperacion.Provider>
    );
};
