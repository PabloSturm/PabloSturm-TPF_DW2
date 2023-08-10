window.onload = inicio;

var inputNumero = document.getElementById("numSocio");
var inputNombre = document.getElementById("nombreSocio");
var inputApellido = document.getElementById("apellidoSocio");
var inputEmail = document.getElementById("emailSocio");
var inputTipo = document.getElementById("tipoSocio");
var inputDireccion = document.getElementById("direccionSocio");
var inputCiudad = document.getElementById("ciudadSocio");
var inputProvincia = document.getElementById("provinciaSocio");
var inputCP = document.getElementById("cpSocio");
var inputBuscarSocio = document.getElementById("socioABuscar");

var btnBuscarSocio = document.getElementById("buscarSocio");
var btnUsarSocio = document.getElementById("usarSocio");

var socio = {};
var socios = [];

socios = JSON.parse(localStorage.getItem("socioJS"));
pagos = JSON.parse(localStorage.getItem("pagoSocio"));

function inicio() {
  btnBuscarSocio.addEventListener("click", buscarSocio);
  btnUsarSocio.addEventListener("click", usarSocio);
}

function buscarSocio() {
  var socioBuscado = socios.find((socio) => {
    if (socio.numero === inputBuscarSocio.value) {
      return 1;
    }
  });

  index = socios.findIndex(function (socio) {
    return socio.numero === inputBuscarSocio.value;
  });

  inputNumero.value = socioBuscado.numero;
  inputNombre.value = socioBuscado.nombre;
  inputApellido.value = socioBuscado.apellido;
  inputEmail.value = socioBuscado.email;
  inputTipo.value = socioBuscado.tipo;
  inputDireccion.value = socioBuscado.direccion;
  inputCiudad.value = socioBuscado.ciudad;
  inputProvincia.value = socioBuscado.provincia;
  inputCP.value = socioBuscado.cp;
}

function usarSocio() {
  var numero = inputNumero.value;
  var nombre = inputNombre.value;
  var apellido = inputApellido.value;
  var direccion = inputDireccion.value;

  socioElegido.innerHTML = `<tr>
                              <td>${numero}</td>
                              <td>${nombre}</td>
                              <td>${apellido}</td>
                              <td>${direccion}</td>
                            </tr>`;

var acceso = accesoSocio(numero);
if (acceso!="Si"){
  window.alert("El Socio no tiene la cuota al dia");
}

}

function accesoSocio(numero) {
  const fecha = new Date();
  const mesActual = parseFloat(fecha.getMonth() + 1);
  const anioActual = parseFloat(fecha.getFullYear());

  pagos.find((pago) => {
    if (pago.numero == numero) {
      if (pago.mes == mesActual) {
        if (pago.anio == anioActual) {
          window.alert("Socio al dia");
          return "Si";
        }
      }
    }
  });

}
