/* Mis arreglos : declaro arreglos para poder utilizarlo tanto en el front como en la logica. */

/* caracteres : contiene todos los caracteres que se muestran en los botones , es usado en el componente botones.*/
export const caracteres = ["(",")","+/-","X²","²√","ⁿ√","sin","cos","tg","X³","³√","Xⁿ","1","2","3","/","%","In","4","5","6","*","log","e","7","8","9","-","AC","=",".","0","ᴨ","+","MR"];
/* caracteresSimples : contiene todos los caracteres que se muestran en los botones , es usado en el componente botones.*/
export const caracteresSimples = ["=","+","-","/","*","1","2","3","²√","4","5","6","AC","7","8","9",".","0","%"];
/* numeros : contiene solo numeros y caracteres que corresponden a la formalizacion de un numero , este es utilizado en el provider y se utiliza para la logica. */
export const numeros = ["0","1","2","3","4","5","6","7","8","9","."];
/* cortadores : contiene todos los caracteres que no son numero y se utilizan en el provider para la logica de la programacion. */
export const cortadores = ["(",")","+/-","=","X²","²√","ⁿ√","sin","cos","tg","X³","³√","Xⁿ","/","%","In","*","log","e","-","AC","ᴨ","+","MR"];
/* funcionesMath : contiene objetos con funciones que son utilizados en el provider para la logica de la programacion. */
export const funcionesMath = [
    {
        tipo: 'suma',
        id: '+',
        operar: (num1, num2) => num1 + num2,
        params: 2
    },
    {
        tipo: 'resta',
        id: '-',
        operar: (num1, num2) => num1 - num2,
        params: 2
    },
    {
        tipo: 'multiplicar',
        id: '*',
        operar: (num1, num2) => num1 * num2,
        params: 2
    },
    {
        tipo: 'dvidir',
        id: '/',
        operar: (num1, num2) => num1 / num2,
        params: 2
    },
    {
        tipo: 'seno',
        id: 'sin',
        operar: (num1) => Math.sin(num1),
        params: 1
    },
    {
        tipo: 'coseno',
        id: 'cos',
        operar: (num1) => Math.cos(num1),
        params: 1
    },
    {
        tipo: 'tangente',
        id: 'tg',
        operar: (num1) => Math.tan(num1),
        params: 1
    },
    {
        tipo: 'logartimo',
        id: 'log',
        operar: (num1) => Math.log(num1),
        params: 1
    },
    {
        tipo: 'raiz_2',
        id: '²√',
        operar: (num1) => Math.sqrt(num1),
        params: 1
    },
    {
        tipo: 'raiz_3',
        id: '³√',
        operar: (num1) => Math.cbrt(num1),
        params: 1
    },
    {
        tipo: 'raiz_n',
        id: 'ⁿ√',
        /*falta funcion javascript*/
        operar: (num1, num2) => num1 + num2,
        params: 2
    },
    {
        tipo: 'exponente_2',
        id: 'X²',
        operar: (num1) => Math.pow(num1, 2),
        params: 1
    },
    {
        tipo: 'exponente_3',
        id: 'X³',
        operar: (num1) => Math.pow(num1, 3),
        params: 1
    },
    {
        tipo: 'exponente_n',
        id: 'Xⁿ',
        operar: (num1, num2) => Math.pow(num1, num2),
        params: 2
    },
    {
        tipo: 'e',
        id: 'e',
        operar: () => Math.E,
        params: 0
    },
    {
        tipo: 'ᴨ',
        id: 'ᴨ',
        operar: () => Math.PI,
        params: 0
    },
    {
        tipo: 'logaritmo_neperiano',
        id: 'Ln',
        operar: (num1) => Math.pow(-10, 7) * Math.log(num1 / Math.pow(-10, 7)),
        params: 1
    },
    {
        tipo: 'Porcentaje',
        id: '%',
        /*falta funcion javascript*/
        operar: (num1, num2) => num1 + num2,
        params: 2
    }
];
