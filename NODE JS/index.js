const funciones=require('./operaciones.js');/*se importa o requiere para poder llamar a otro archivo, esto tambien es un modulo*/
const os=require('os');
const dns=require('dns');/*servidores de dominios*/
const fs=require('fs');/* maneja el servicio de archivos file system*/

function suma(n1,n2){
  return (n1+n2);
}

function kbl(){
  return(os.freemem()/1024);
};

function mbl(){
  return (kbl()/1024);
};

function gbl(){
  return(mbl()/1024);
};
console.log(suma(3,4));
console.log(funciones.resta(7,3));/*se llama a traves de la funcion donde se declaro el archivo y luego la funcion*/

console.log(os.platform());
console.log(os.release());
console.log(os.version());

console.log(gbl().toFixed(2)+' Gb');/*muestra solo dos decimales*/

console.log(dns.getServers()); /* cuales son los servidores*/

fs.writeFile('./texto.txt','texto de ejemplo', function(error){
  if(error){
    console.log('error');
  }else{
    console.log('se ha creado el archivo');
  }
});/*crea un archivo, nombre, contenido y captura la respuesta por si hay error*/

console.log('fin');



/*JSON - Anotacion de un objeto de java script - Java Script Object Notation
El back End se comunica con el Front end a traves de objetos JSON

*/