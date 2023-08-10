window.onload=inicio;/*cuando la pagina es cargada se produce el metodo load*/

var btn=document.getElementById("btn");
var btnGuardarAlInicio=document.getElementById("btn1");
var btnBorrarAlFinal=document.getElementById("btn3");
var btnBorrarAlInicio=document.getElementById("btn2");
var btnBorrarAPartirDe=document.getElementById("btn4");
var btnBorrarNElementos=document.getElementById("btn5");
var btnReemplazar=document.getElementById("btn6");
var btnMap=document.getElementById("btn7");
var btnFilter=document.getElementById("btn8");
var btnReduce=document.getElementById("btn9");
var btnSort=document.getElementById("btn10");
var btnFind=document.getElementById("btn11");
var btnSome=document.getElementById("btn12");
var btnBorrar=document.getElementById("btn13");
var btnEvery=document.getElementById("btn14");
var btnLocalStorage=document.getElementById("btn15");

var alumno={};
var alumnos=[];
var nombres=[];

function inicio(){
  btn.addEventListener("click",guardar);
  btnGuardarAlInicio.addEventListener("click",agregarAlInicio);
  btnBorrarAlInicio.addEventListener("click",borrarInicio);
  btnBorrarAlFinal.addEventListener("click",borrarFinal);
  btnBorrarAPartirDe.addEventListener("click",borrarAPartirDe);
  btnBorrarNElementos.addEventListener("click",borrarNElementos);
  btnReemplazar.addEventListener("click",reemplazar);
  btnMap.addEventListener("click",map);
  btnFilter.addEventListener("click",filter);
  btnReduce.addEventListener("click",reduce);
  btnSort.addEventListener("click",sort);
  btnFind.addEventListener("click",find);
  btnSome.addEventListener("click",some);
  btnBorrar.addEventListener("click",borrar);
  btnEvery.addEventListener("click",every);
  btnLocalStorage.addEventListener("click",listarLocalStorage);
};

function guardar(){
  alumno={};
  var txtNombre=document.getElementById("nombre");
  alumno.nombre=txtNombre.value;
  txtNombre.value="";
  var txtApellido=document.getElementById("apellido");
  alumno.apellido=txtApellido.value;
  txtApellido.value="";
  var txtDireccion=document.getElementById("direccion");
  alumno.direccion=txtDireccion.value;
  txtDireccion.value="";
  var txtEmail=document.getElementById("email");
  alumno.email=txtEmail.value;
  txtEmail.value="";
  alumnos.push(alumno);/*cargar en un vector al final del array alumno*/

  /*guardar en localstore - solo guarda stings, por lo tanto hay que gnerar un JSON para poder guardar un vector*/ 
  localStorage.setItem("lstLS",JSON.stringify(alumnos));/* primero campo, segundo contenido*/ 

  listar();
};

function agregarAlInicio(){
  alumno={};
  var txtNombre=document.getElementById("nombre");
  alumno.nombre=txtNombre.value;
  txtNombre.value="";
  var txtApellido=document.getElementById("apellido");
  alumno.apellido=txtApellido.value;
  txtApellido.value="";
  var txtDireccion=document.getElementById("direccion");
  alumno.direccion=txtDireccion.value;
  txtDireccion.value="";
  var txtEmail=document.getElementById("email");
  alumno.email=txtEmail.value;
  txtEmail.value="";
  alumnos.unshift(alumno);/*cargar en un vector en el inicio del array alumno*/
  listar();
};
function borrarInicio(){
  alumnos.shift();/*elimina el primer registro del vector*/
  listar();
};

function borrarFinal(){
  alumnos.pop();/*elimina el ultimo registro del vector*/
  listar();
};

function borrarAPartirDe(){
  var txtAPartirDe=document.getElementById("aPartirDe");
  alumnos.splice(txtAPartirDe.value);
  listar();
};

function borrarNElementos(){
  var txtCantidad=document.getElementById("cantidad");
  var txtAPartirDe1=document.getElementById("aPartirDe1");
  alumnos.splice(txtAPartirDe1.value, txtCantidad.value);
  listar();
};

function reemplazar(){
  var txtReemplazar=document.getElementById("reemplazar");
  
  alumno={};
  var txtNombre=document.getElementById("nombre");
  alumno.nombre=txtNombre.value;
  txtNombre.value="";
  var txtApellido=document.getElementById("apellido");
  alumno.apellido=txtApellido.value;
  txtApellido.value="";
  var txtDireccion=document.getElementById("direccion");
  alumno.direccion=txtDireccion.value;
  txtDireccion.value="";
  var txtEmail=document.getElementById("email");
  alumno.email=txtEmail.value;
  txtEmail.value="";

  alumnos.splice(txtReemplazar.value,1,alumno);
  listar();
};

function map(){
  var nombres=alumnos.map(alumno => alumno.apellido+", "+alumno.nombre);
  var lista1=document.getElementById("lista1");
  lista1.innerHTML=`<h3 class="tituloTabla">Posición</h3>
  <h3 class="tituloTabla">Alumno</h3> <h3 class="tituloTabla"> </h3>
  <h3 class="tituloTabla"> </h3> <h3 class="tituloTabla"> </h3>`;
  nombres.forEach((alumno,n)=>{
    lista1.innerHTML+=`<h3 class="alumno">${n}</h3>
    <h3 class="alumno">${alumno}</h3>
    <h3 class="alumno"> </h3>
    <h3 class="alumno"> </h3>
    <h3 class="alumno"> </h3>`
  });
};

function filter(){
  var txtFilter=document.getElementById("filter").value;
  var nombres=alumnos.filter(alumno =>{if (alumno.apellido===txtFilter){return true}});
  var lista1=document.getElementById("lista1");

  lista1.innerHTML=`<h3 class="tituloTabla">Posición</h3>
  <h3 class="tituloTabla">Nombre</h3> <h3 class="tituloTabla">Apellido</h3>
  <h3 class="tituloTabla">Dirección</h3> <h3 class="tituloTabla">Email</h3>`;
  nombres.forEach((alumno,n)=>{
    lista1.innerHTML+=`<h3 class="alumno">${n}</h3>
    <h3 class="alumno">${alumno.nombre}</h3>
    <h3 class="alumno">${alumno.apellido}</h3>
    <h3 class="alumno">${alumno.direccion}</h3>
    <h3 class="alumno">${alumno.email}</h3>`
  });
};

function reduce(){/*permite hacer operaciones matemáticas*/
  var resultado=alumnos.reduce((total,alumno)=>{
    return total+parseFloat(alumno.nombre);
  },0);
  var lista1=document.getElementById("lista1");
  lista1.innerHTML=`<h3 class="tituloTabla">Nombres</h3><h3 class="alumno">${resultado}</h3>`;
};

function sort(){
  var alumnosOdenados=alumnos.sort((primero, segundo)=>{
    if(primero.apellido>segundo.apellido){
      return 1;
    }else{
      return -1;
    }
  });
  var lista1=document.getElementById("lista1");
  lista1.innerHTML=`<h3 class="tituloTabla">Posición</h3>
  <h3 class="tituloTabla">Nombre</h3> <h3 class="tituloTabla">Apellido</h3>
  <h3 class="tituloTabla">Dirección</h3> <h3 class="tituloTabla">Email</h3>`;
  alumnosOdenados.forEach((alumno,n)=>{
    lista1.innerHTML+=`<h3 class="alumno">${n}</h3>
    <h3 class="alumno">${alumno.nombre}</h3>
    <h3 class="alumno">${alumno.apellido}</h3>
    <h3 class="alumno">${alumno.direccion}</h3>
    <h3 class="alumno">${alumno.email}</h3>`
  });
};

function find(){/* devuelve el primer elemento del vector que coincida*/
  var alumnoEncontrado=alumnos.find((alumno)=>{
    if(alumno.apellido==='Garcia'){
      return 1;
    };
  });
  var lista1=document.getElementById("lista1");
  lista1.innerHTML=`<h3 class="tituloTabla">Posición</h3>
  <h3 class="tituloTabla">Nombre</h3> <h3 class="tituloTabla">Apellido</h3>
  <h3 class="tituloTabla">Dirección</h3> <h3 class="tituloTabla">Email</h3>
  <h3 class="alumno"> </h3>
  <h3 class="alumno">${alumnoEncontrado.nombre}</h3>
  <h3 class="alumno">${alumnoEncontrado.apellido}</h3>
  <h3 class="alumno">${alumnoEncontrado.direccion}</h3>
  <h3 class="alumno">${alumnoEncontrado.email}</h3>`

};

function some(){
  var condicion=alumnos.some((alumno)=>{
    if(alumno.apellido==="Garcia"){
      return 1;
    }
  });

  var lista1=document.getElementById("lista1");
  lista1.innerHTML=`<h3 class="tituloTabla">Condición</h3>
  <h3 class="tituloTabla">   </h3>`;

  lista1.innerHTML+=`<h3 class="alumno">Garcia?</h3>
  <h3 class="alumno">${condicion}</h3>`;
};

function every(){
  var condicion=alumnos.every((alumno)=>{
    if(alumno.apellido==="Garcia"){
      return 1;
    }
  });

  var lista1=document.getElementById("lista1");
  lista1.innerHTML=`<h3 class="tituloTabla">Condición</h3>
  <h3 class="tituloTabla">   </h3>`;

  lista1.innerHTML+=`<h3 class="alumno">Garcia?</h3>
  <h3 class="alumno">${condicion}</h3>`;
};

function borrar(){
  var lista1=document.getElementById("lista1");
  lista1.innerHTML=``;
};

function listar(){
  var lista=document.getElementById("lista");

  lista.innerHTML=`<h3 class="tituloTabla">Posición</h3>
  <h3 class="tituloTabla">   </h3>
  <h3 class="tituloTabla">Apellido</h3>
  <h3 class="tituloTabla">Dirección</h3>
  <h3 class="tituloTabla">Email</h3>`;

  // for(var n=0;n<alumnos.length;n++){/*ciclo para que recorra el vector */
  // lista.innerHTML += `<h3 class="alumno">${n}</h3>
  // <h3 class="alumno">${alumnos[n].nombre}</h3>
  // <h3 class="alumno">${alumnos[n].apellido}</h3>
  // <h3 class="alumno">${alumnos[n].direccion}</h3>
  // <h3 class="alumno">${alumnos[n].email}</h3>` /*agregar al html lo que se adjunta*/
  // };

  alumnos.forEach((alumno,n) => {
    lista.innerHTML += `<h3 class="alumno">${n}</h3>
    <h3 class="alumno">${alumno.nombre}</h3>
    <h3 class="alumno">${alumno.apellido}</h3>
    <h3 class="alumno">${alumno.direccion}</h3>
    <h3 class="alumno">${alumno.email}</h3>`;
  });
};

function listarLocalStorage(){
  alumnoLocalStorage=JSON.parse(localStorage.getItem("lstLS")); /*parse es lo opuesto a....., para poder transformar un JSON en vector nuevamente*/  
  var lista1=document.getElementById("lista1");

  lista1.innerHTML=`<h3 class="tituloTabla">Posición</h3>
  <h3 class="tituloTabla">Nombre</h3>
  <h3 class="tituloTabla">Apellido</h3>
  <h3 class="tituloTabla">Dirección</h3>
  <h3 class="tituloTabla">Email</h3>`;

  alumnoLocalStorage.forEach((alumno,n)=>{
    lista1.innerHTML+=`<h3 class="alumno">${n}</h3>
    <h3 class="alumno">${alumno.nombre}</h3>
    <h3 class="alumno">${alumno.apellido}</h3>
    <h3 class="alumno">${alumno.direccion}</h3>
    <h3 class="alumno">${alumno.email}</h3>`;
  });
};