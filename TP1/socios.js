window.onload=inicio;

var inputNumero=document.getElementById("numSocio");
var inputNombre=document.getElementById("nombreSocio");
var inputApellido=document.getElementById("apellidoSocio");
var inputEmail=document.getElementById("emailSocio");
var inputTipo=document.getElementById("tipoSocio");
var inputDireccion=document.getElementById("direccionSocio");
var inputCiudad=document.getElementById("ciudadSocio");
var inputProvincia=document.getElementById("provinciaSocio");
var inputCP=document.getElementById("cpSocio");
var inputBuscarSocio=document.getElementById("socioABuscar");

var btnBuscarSocio=document.getElementById("buscarSocio");
var btnGuardarSocio=document.getElementById("guardarSocio");
var btnSigSocio=document.getElementById("sigSocio");
var btnAntSocio=document.getElementById("antSocio");
var btnBorrarSocio=document.getElementById("borrarSocio");
var btnLimpiarSocio=document.getElementById("limpiarSocio");

var socio={}; 
var socios=[];
var index=-1;

// if (localStorage.getItem("socioJS")>1){
  socios=JSON.parse(localStorage.getItem("socioJS"));
// }

function inicio(){
  btnBuscarSocio.addEventListener("click",buscarSocio);
  btnGuardarSocio.addEventListener("click",guardarSocio);
  btnSigSocio.addEventListener("click",siguienteSocio);
  btnAntSocio.addEventListener("click",anteriorSocio);
  btnBorrarSocio.addEventListener("click",borrarSocio);
  btnLimpiarSocio.addEventListener("click",limpiarSocio);
}

function buscarSocio(){
  var socioBuscado=socios.find((socio)=>{
    if(socio.numero===inputBuscarSocio.value)
    {return 1}
  });

  index=socios.findIndex(function(socio){
    return socio.numero===inputBuscarSocio.value;
  });

  inputNumero.value=socioBuscado.numero;
  inputNombre.value=socioBuscado.nombre;
  inputApellido.value=socioBuscado.apellido;
  inputEmail.value=socioBuscado.email;
  inputTipo.value=socioBuscado.tipo;
  inputDireccion.value=socioBuscado.direccion;
  inputCiudad.value=socioBuscado.ciudad;
  inputProvincia.value=socioBuscado.provincia;
  inputCP.value=socioBuscado.cp;
};

function guardarSocio(){
  socio={};

  socio.numero=inputNumero.value;
  socio.nombre=inputNombre.value;
  socio.apellido=inputApellido.value;
  socio.email=inputEmail.value;
  socio.tipo=inputTipo.value;
  socio.direccion=inputDireccion.value;
  socio.ciudad=inputCiudad.value;
  socio.provincia=inputProvincia.value;
  socio.cp=inputCP.value;

  inputNumero.value="";
  inputNombre.value="";
  inputApellido.value="";
  inputEmail.value="";
  inputTipo.value="";
  inputDireccion.value="";
  inputCiudad.value="";
  inputProvincia.value="";
  inputCP.value="";

  socios.push(socio);

  localStorage.setItem("socioJS",JSON.stringify(socios));

};

function siguienteSocio(){
  index++;
  socio=socios[index];
  inputNumero.value=socio.numero;
  inputNombre.value=socio.nombre;
  inputApellido.value=socio.apellido;
  inputEmail.value=socio.email;
  inputTipo.value=socio.tipo;
  inputDireccion.value=socio.direccion;
  inputCiudad.value=socio.ciudad;
  inputProvincia.value=socio.provincia;
  inputCP.value=socio.cp;

  btnAntSocio.disabled=false;
  if(index==socios.length-1){
    btnSigSocio.disabled=true;
  }
};

function anteriorSocio(){
  index--;
  socio=socios[index];
  inputNumero.value=socio.numero;
  inputNombre.value=socio.nombre;
  inputApellido.value=socio.apellido;
  inputEmail.value=socio.email;
  inputTipo.value=socio.tipo;
  inputDireccion.value=socio.direccion;
  inputCiudad.value=socio.ciudad;
  inputProvincia.value=socio.provincia;
  inputCP.value=socio.cp;

  btnSigSocio.disabled=false;
  if(index==0){
    btnAntSocio.disabled=true;
  }
};

function borrarSocio(){
  socios.splice(index,1);
  localStorage.setItem("socioJS",JSON.stringify(socios));
  anteriorSocio();
};

function limpiarSocio(){
  inputBuscarSocio.value="";
  inputNumero.value="";
  inputNombre.value="";
  inputApellido.value="";
  inputEmail.value="";
  inputTipo.value="";
  inputDireccion.value="";
  inputCiudad.value="";
  inputProvincia.value="";
  inputCP.value="";
};