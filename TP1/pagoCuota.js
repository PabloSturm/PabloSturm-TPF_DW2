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

var inputMesPago=document.getElementById("mesPago");
var inputAnioPago=document.getElementById("anioPago");
var inputMontoPago=document.getElementById("montoPago");

// var socioElegido=document.getElementById("socioElegido");
// var totalPago=document.getElementById("totalPago");

var btnBuscarSocio=document.getElementById("buscarSocio");
var btnUsarSocio=document.getElementById("usarSocio");
// var btnUsarPago=document.getElementById("usarPago");
var btnPagar=document.getElementById("pagar");


var socio={}; 
var socios=[]; 
var pago={};
var pagos=[];
var item=0;
var total=0;
var mes="";
var anio="";
var monto=0;

// if (localStorage.getItem("socioJS")>1){
  socios=JSON.parse(localStorage.getItem("socioJS"));
// }
  pagos=JSON.parse(localStorage.getItem("pagoSocio"));

function inicio(){
  btnBuscarSocio.addEventListener("click",buscarSocio);
  btnUsarSocio.addEventListener("click",usarSocio);
  // btnUsarPago.addEventListener("click",usarPago);
  btnPagar.addEventListener("click",pagar);
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

function usarSocio(){
  var numero=inputNumero.value;
  var nombre=inputNombre.value;
  var apellido=inputApellido.value;
  var direccion=inputDireccion.value;

  socioElegido.innerHTML=`<tr>
                              <td>${numero}</td>
                              <td>${nombre}</td>
                              <td>${apellido}</td>
                              <td>${direccion}</td>
                            </tr>`;
};

function pagar(){
  pago={};

  pago.numero=inputNumero.value;
  pago.nombre=inputNombre.value;
  pago.apellido=inputApellido.value;

  pago.mes=inputMesPago.value;
  pago.anio=inputAnioPago.value;
  pago.monto=inputMontoPago.value;

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
  
  socioElegido.innerHTML=""

  inputMesPago.value="";
  inputAnioPago.value="";
  inputMontoPago.value="";

  pagos.push(pago);

  localStorage.setItem("pagoSocio",JSON.stringify(pagos));
  window.alert("Pago Realizado y registrado");

};