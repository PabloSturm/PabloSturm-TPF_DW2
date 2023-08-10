window.onload=inicio;

var inputNombre=document.getElementById("nombre");
var inputApellido=document.getElementById("apellido");
var inputDireccion=document.getElementById("direccion");
var inputEmail=document.getElementById("email");
var inputCiudad=document.getElementById("ciudad");
var inputProvincia=document.getElementById("provincia");
var inputCP=document.getElementById("cp");
var inputBuscar=document.getElementById("ABuscar");

var btnBuscar=document.getElementById("buscar");
var btnGuardar=document.getElementById("guardar");/*captura la accion del boton*/
var btnSig=document.getElementById("sig");
var btnAnt=document.getElementById("ant");
var btnBorrar=document.getElementById("borrar");

var ={}; /* objeto */
var s=[]; /* vector */
var index=-1;

var s=JSON.parse(localStorage.getItem("nnn"));

function inicio(){
  btnBuscar.addEventListener("click",buscar);
  btnGuardar.addEventListener("click",guardar);
  btnSig.addEventListener("click",siguiente);
  btnAnt.addEventListener("click",anterior);
  btnBorrar.addEventListener("click",borrar);
}

function buscar(){
  var Buscado=s.find(()=>{
    if(.apellido===inputBuscar.value)
    {return 1}
  });

  index=s.findIndex(function(){/*busca ubicacion del  buscado*/
    return .apellido===inputBuscar.value;
  });

  inputNombre.value=Buscado.nombre;
  inputApellido.value=Buscado.apellido;
  inputDireccion.value=Buscado.direccion;
  inputEmail.value=Buscado.email;
  inputCiudad.value=Buscado.ciudad;
  inputProvincia.value=Buscado.provincia;
  inputCP.value=Buscado.cp;
};

function guardar(){
  var ={};

  .nombre=inputNombre.value;
  .apellido=inputApellido.value;
  .direccion=inputDireccion.value;
  .email=inputEmail.value;
  .ciudad=inputCiudad.value;
  .provincia=inputProvincia.value;
  .cp=inputCP.value;

  inputNombre.value="";
  inputApellido.value="";
  inputDireccion.value="";
  inputEmail.value="";
  inputCiudad.value="";
  inputProvincia.value="";
  inputCP.value="";

  s.push();

  localStorage.setItem("nnn",JSON.stringify(s));

};

function siguiente(){
  index++;
  =s[index];
  inputNombre.value=.nombre;
  inputApellido.value=.apellido;
  inputDireccion.value=.direccion;
  inputEmail.value=.email;
  inputCiudad.value=.ciudad;
  inputProvincia.value=.provincia;
  inputCP.value=.cp;

  btnAnt.disabled=false;
  /*deshabilitar el boton cuando llegue al final del vector*/ 
  if(index==s.length-1){
    btnSig.disabled=true;
  }
};

function anterior(){
  index--;
  =s[index];
  inputNombre.value=.nombre;
  inputApellido.value=.apellido;
  inputDireccion.value=.direccion;
  inputEmail.value=.email;
  inputCiudad.value=.ciudad;
  inputProvincia.value=.provincia;
  inputCP.value=.cp;

  btnSig.disabled=false;
  /*deshabilitar el boton cuando llegue al final del vector*/ 
  if(index==0){
    btnAnt.disabled=true;
  }
};

function borrar(){
  s.splice(index,1);
  localStorage.setItem("nnn",JSON.stringify(s));
  anterior();
};