// advanced functions

//function declaration
function saludar() {
    console.log("buenos dias, es lunes")
}


let alumnos = ["Ivan", "Roberto", "Hernando"];

//function expression: no se pueden utilizar antes de definirlas (pq no tienen nombre) (HOISTING) es anónima
alumnos.forEach(function (alumno, i) {

})


//arrow functions: es anónima
const saludarArrow = (nombre) => {
    console.log("hola", nombre)
}

//puedo ignorar los parentesis de nombre y poner: 

// const saludarArrow = nombre => {
//     console.log("hola", nombre)
// }

//o en una sola linea

// const saludarArrow = nombre=> console.log("hola", nombre)


saludarArrow("mariona")

const saludarArrowGenerico = () => {
    console.log("Hola a todos")
}

const getNombre = nombre => nombre
/* const getNombre = function(nombre) {
    return nombre 
} */

//en un forEach
alumnos.forEach((alumno) => { //ante la duda, usar arrow functions dentro de forEach
    console.log(alumno[0]) //iniciales de los alumnos
})



//CALLBACKS
//Funcion que se pasas como parámetro y que se puede ejecutar en cualquier momento dentro de la funcion declarada

function comer(callback) {
    setTimeout(function () {
        //función asíncrona
        console.log("comiendo el plato principal");
        callback();
    }, 2000)


    // comerPostre()
}
function comerPostre() {
    console.log("comiendo el postre");
    setTimeout(() => { "comiendo el postre" }, 2000)
}



comer(comerPostre) //tiene dentro el comer postre. esto es un callback. ejecutar una funcion dentro de otra
//ejecuta primero comer y luego comer postre


//SETINTERVAL

let identificador = setInterval(function () {
    console.log("setInterval! 2 segundos")
}, 2000);


let identificador2 = setInterval(() => {
    console.log("setInterval 1 segundo")
}, 1000);

console.log("identificador: ", identificador)
setTimeout(() => {
    console.log("matando intervalos")
    clearInterval(identificador);
    clearInterval(identificador2);
}, 5000)




function setEdad(numero) {
    console.log(numero);
    console.log("arguments: ", arguments);
}

setEdad(3, 4, "hola", [1, 2, 3]);

function setAlumnos() {
    console.log("has seteado " + arguments.length + " alumnos")
    console.log("lista de alumnos: ", arguments)
    let arrayAlumnos = Array.from(arguments) //te guarda algo como un array
    console.log(arrayAlumnos)
}

setAlumnos("Rubén", "Raúl", "Gerard");
setAlumnos("Rubén", "Raúl", "Gerard", "Lucía", "Adrían", "Mario")


//THIS. OTRA MIRADA AL THIS

const user = {
    name: 'ana',
    age: 29,
    getOlder: function () {
        console.log(this.age);
        setInterval(function () {
            this.age += 1;
            console.log(this.age)
        }, 1000) //NO FUNCIONA, perdemos el contexto de this
    },
    getOlderArr: function () {
        setInterval(() => {
            this.age += 1;
            console.log(this)
        }, 1000)
    }
}


//setInverval o setTimeout se usan arrow functions

//  IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//FUNCTION DECLARATION:
//- THIS es quien esta detras (izquierda) del punto a la hora de ejecutar (user)
//- Si se ejecuta de forma asincrona (settimeout o setinterval) se pierde el contexto

//ARROW FUNCTION
//- THIS se hereda de la funcion donde esta definida
//- Si se ejecuta de forma asincrona no se pierde el contexto

// user.getOlder()
user.getOlderArr()


//LUEGO MARIONA COPIO COSAS DE OTRO LADO, MIRAR EL DE CLASES PARA MAS INFORMACION


//MAP, REDUCE, FILTER  -->  NO MUTAN AL ARRAY ORIGINAL
//MAP: coge elemento a elemento y le aplica una transformacion
let numeros = [1, 2, 3];
let numerosDuplicados = numeros.map((numero) => {
    return numero * 2
})

//REDUCE: convierte todos los elementos del array en un solo valor
const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
    console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
    return accumulator + currentValue;
});

console.log('total is: ', total);

// accumulator is:  2 and current value is:  4
// accumulator is:  6 and current value is:  6
// accumulator is:  12 and current value is:  8
// total is:  20

//MIRAR EN STUDENT PORTAL


//FILTER: filtra parametros

// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

let citiesM = cities.filter((city) => {
    if (city[0] == "m") return city;
    // O return city[0] == "m"
})

console.log(citiesM)



const numbersFilter = [1, 2, 3, 4, 5, 6]

let numberPar = numbersFilter.filter((number) => {
    if (number % 2 == 0) {
        return number;
    }
})

console.log(numberPar)




//SORT, REVERSE --> MUTAN AL ARRAY ORIGINAL
//SORT: ordena
let numsDesordenados = [44, 1, 25, 2212, 7, 12, 54, 221, 64, 6, 43]
numsDesordenados.sort((a, b) => {
    return a - b //ascendiente
    return b - a //descendiente
})
console.log(numsDesordenados)





//REVERSE: invierte
console.log(numbersFilter) // 1,2,3,4,5,6
numbersFilter.reverse();
console.log(numbersFilter) // 6,5,4,3,2,1



