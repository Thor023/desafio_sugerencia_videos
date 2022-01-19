// class Pelicula{
//     constructor(nombre){
//         this._nombre = nombre;
//     }
//     getName (){
//         return this._nombre;
//     }
// }
// class Largometraje extends Pelicula {
//     constructor(nombre, duracion){
//         super(nombre);
//         this._duracion = duracion;
//     }
//     getDuracion (){
//         return this._duracion;
//     }
//     setDuracion (duracion){
//         this._duracion = duracion;
//     }
// }
// class Cortometraje extends Pelicula {
//     constructor(nombre, duracion){
//         super(nombre);
//         this._duracion = duracion;
//     }
//     getDuracion (){
//         return this._duracion;
//     }
//     setDuracion (duracion){
//         this._duracion = duracion;
//     }
// }
// class MyApp {
//     play (Pelicula){
//         const result = `La pelicula ${Pelicula.getName()} se esta reproduciendo y dura ${Pelicula.getDuracion()}`;
//         return result;
//     }
// }

// const largometraje = new Largometraje('Sin city', '105 min');
// const cortometraje = new Cortometraje('Hulk vs Wolverine', '20 min');

// const myApp1 = new MyApp();

// const playing = myApp1.play(largometraje);
// console.log(playing);

// const playing2 = myApp1.play(cortometraje);
// console.log(playing2);

// Funciones con return

// const recibeNums = (num1, num2) => {
//     return {
//     suma: () => num1 + num2
//     }
// }
// const result = recibeNums(2,4).suma();
// console.log(result);

// const recibiendoNumeros = (a,b)=>{
//     const unNumero = 100;
//     return{
//         restaNum: (c)=>c-1,
//         sumaNum: ()=> a+b,
//         unNumero
//     }
// }
// // const restando = recibiendoNumeros(6,8).restaNum(34);
// // console.log(restando);
// const unNumeroNuevo = recibiendoNumeros(1,2).unNumero;
// console.log(unNumeroNuevo);


// Closure en ES6

// class Usuario {
//     constructor(nombre) {
//     let _nombre = nombre;
//     this.getNombre = () => _nombre;
//     this.setNombre = (nuevo_nombre) => _nombre = nuevo_nombre;
//     }
//     saludar(){
//     console.log("Bienvenido usuario: "+this.nombre);
//     }
//     get nombre(){
//         return this.getNombre();
//     }
//     set nombre(nuevo_nombre){
//         return this.setNombre(nuevo_nombre);

//     }
// }
// class Administrador extends Usuario {
//     constructor(nombre){
//     super(nombre);
//     }
//     saludar(){
//     console.log("Panel de Administración - Usuario: "+
//     this.nombre);
//     }
// }

// let adminUser = new Administrador("Juan");
// console.log(adminUser.nombre);
// console.log(adminUser._nombre);
// adminUser.saludar();
// adminUser.nombre = 'Petra';
// console.log(adminUser.nombre);
// adminUser.saludar();


//PATRON DE MODULOS

// var lenguaje= "Ruby";
// (function(){
// var lenguaje= "JavaScript";
// console.log(lenguaje + " es un lenguaje de programación");
// })();
// console.log(lenguaje);

// let lenguaje= "Ruby";
// (() => {
// let lenguaje= "JavaScript";
// console.log(`${lenguaje} es un lenguaje de programación`);
// })();

// FUNCIONES IIFE


//ENCAPSULAMIENTO IIFE

// const miEspacio = (() => {
//     let miVariablePrivada, miMetodoPrivado;
//     //una variable privada 
//     miVariablePrivada = 0;
//     //funcion que muestra al recibir 
//     miMetodoPrivado = (valor1) => {
//         console.log(valor1);
//     };
//     return{
//         //variable publica
//         miVariablePrivada:"hola",
//         //funcion publica que usa los elementos privados
//         miFuncionPublica: (valor2) =>{
//             miVariablePrivada++;
//             miMetodoPrivado(valor2);
//             console.log(miVariablePrivada);
//         }
//     }
// })();
// miEspacio.miFuncionPublica("saludos");

// const contenedor = (() => {
//     let numeroPrivado = 5 
//     let saludoPrivado = () => `Este es un saludo privado`

//     return {
//         saludoPublico: () => `Este es un saludo publico`,
//         saberCualEsElNumeroPrivado: () => `El numero privado es `+numeroPrivado
//     }
// })();
// console.log(contenedor.saberCualEsElNumeroPrivado());

