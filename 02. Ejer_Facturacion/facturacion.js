window.onload=inicio;

var inputNombre=document.getElementById("nombreCliente");
var inputApellido=document.getElementById("apellidoCliente");
var inputDireccion=document.getElementById("direccionCliente");
var inputEmail=document.getElementById("emailCliente");
var inputCiudad=document.getElementById("ciudadCliente");
var inputProvincia=document.getElementById("provinciaCliente");
var inputCP=document.getElementById("cpCliente");
var inputBuscarCliente=document.getElementById("clienteABuscar");

var inputProdABuscar=document.getElementById("prodABuscar");
var inputCodigoProd=document.getElementById("codigoProd");
var inputDescripcionProd=document.getElementById("descripcionProd");
var inputPresentacionProd=document.getElementById("presentacionProd");
var inputPrecioProd=document.getElementById("precioProd");
var inputCantidadProd=document.getElementById("cantidadProd");

var clienteElegido=document.getElementById("clienteElegido");
var itemFactura=document.getElementById("itemFactura");
var totalFactura=document.getElementById("totalFactura");

var btnBuscarCliente=document.getElementById("buscarCliente");
var btnUsarCliente=document.getElementById("usarCliente");
var btnBuscarProd=document.getElementById("buscarProd");
var btnUsarProd=document.getElementById("usarProd");

var cliente={}; /* objeto */
var clientes=[]; /* vector */
var producto={};
var productos=[];

var item=0;
var total=0;

var clientes=JSON.parse(localStorage.getItem("nnn"));
var productos=JSON.parse(localStorage.getItem("prod"));

function inicio(){
  btnBuscarCliente.addEventListener("click",buscarCliente);
  btnUsarCliente.addEventListener("click",usarCliente);
  btnBuscarProd.addEventListener("click",buscarProd);
  btnUsarProd.addEventListener("click",usarProd);
}

function buscarCliente(){
  var clienteBuscado=clientes.find((cliente)=>{
    if(cliente.apellido===inputBuscarCliente.value)
    {return 1}
  });

  inputNombre.value=clienteBuscado.nombre;
  inputApellido.value=clienteBuscado.apellido;
  inputDireccion.value=clienteBuscado.direccion;
  inputEmail.value=clienteBuscado.email;
  inputCiudad.value=clienteBuscado.ciudad;
  inputProvincia.value=clienteBuscado.provincia;
  inputCP.value=clienteBuscado.cp;
};

function usarCliente(){
  var nombre=inputNombre.value;
  var apellido=inputApellido.value;
  var direccion=inputDireccion.value;

  clienteElegido.innerHTML=`<tr>
                              <td>${nombre}</td>
                              <td>${apellido}</td>
                              <td>${direccion}</td>
                            </tr>`;
};

function buscarProd(){
  var productoBuscado=productos.find((producto)=>{
    if(producto.codigo===inputProdABuscar.value)
    {return 1}
  });

  inputCodigoProd.value=productoBuscado.codigo;
  inputDescripcionProd.value=productoBuscado.descripcion;
  inputPresentacionProd.value=productoBuscado.presentacion;
  inputPrecioProd.value=productoBuscado.precio;
};

function usarProd(){
  var codigo=inputCodigoProd.value;
  var descripcion=inputDescripcionProd.value;
  var presentacion=inputPresentacionProd.value;
  var precio=inputPrecioProd.value;
  var cantidad=inputCantidadProd.value;
  var subtotal=parseFloat(precio)*parseFloat(cantidad);
  total +=subtotal;
  item++;

  itemFactura.innerHTML+=`<tr>
                              <th scope="row">${item}</th>
                              <th>${codigo}</th>
                              <th>${descripcion}</th>
                              <th>${presentacion}</th>
                              <th>${cantidad}</th>
                              <th>$ ${precio}</th>
                              <th>$ ${subtotal}</th>
                            </tr>`;
  totalFactura.innerHTML=`
                              <th scope="row"></th>
                              <td colspan="5">Total</td>
                              <td>$ ${total}</td>`;
                              inputCodigoProd.value="";
                              inputDescripcionProd.value="";
                              inputPresentacionProd.value="";
                              inputPrecioProd.value="";
                              inputCantidadProd.value="";
};