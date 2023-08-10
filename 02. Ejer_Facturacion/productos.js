window.onload=inicio;

var inputProdABuscar=document.getElementById("prodABuscar");
var inputCodigoProd=document.getElementById("codigoProd");
var inputDescripcionProd=document.getElementById("descripcionProd");
var inputPresentacionProd=document.getElementById("presentacionProd");
var inputPrecioProd=document.getElementById("precioProd");

var producto={};
var productos=[];
var index=-1;

var productos=JSON.parse(localStorage.getItem("prod"));

var btnBuscarProd=document.getElementById("buscarProd");
var btnAntProd=document.getElementById("prodAnt");
var btnGuardarProd=document.getElementById("guardarProd");
var btnBorrarProd=document.getElementById("borrarProd");
var btnSigProd=document.getElementById("prodSig");

function inicio(){
  btnGuardarProd.addEventListener("click",guardarProducto)
  btnAntProd.addEventListener("click",anteriorProducto)
  btnSigProd.addEventListener("click",siguienteProducto)
  btnBorrarProd.addEventListener("click",borrarProducto)
  btnBuscarProd.addEventListener("click",buscarProducto)
};

function guardarProducto(){
  var producto={};

  producto.codigo=inputCodigoProd.value;
  producto.descripcion=inputDescripcionProd.value;
  producto.presentacion=inputPresentacionProd.value;
  producto.precio=inputPrecioProd.value;

  inputCodigoProd.value="";
  inputDescripcionProd.value="";
  inputPresentacionProd.value="";
  inputPrecioProd.value="";

  productos.push(producto);

  localStorage.setItem("prod",JSON.stringify(productos));
}

function siguienteProducto(){
  index++;
  producto=productos[index];
  inputCodigoProd.value=producto.codigo;
  inputDescripcionProd.value=producto.descripcion;
  inputPresentacionProd.value=producto.presentacion;
  inputPrecioProd.value=producto.precio;

  btnAntProd.disabled=false;
  /*deshabilitar el boton cuando llegue al final del vector*/ 
  if(index==productos.length-1){
    btnSigProd.disabled=true;
  }
};

function anteriorProducto(){
  index--;
  producto=productos[index];
  inputCodigoProd.value=producto.codigo;
  inputDescripcionProd.value=producto.descripcion;
  inputPresentacionProd.value=producto.presentacion;
  inputPrecioProd.value=producto.precio;

  btnSigProd.disabled=false;
  /*deshabilitar el boton cuando llegue al final del vector*/ 
  if(index==0){
    btnAntProd.disabled=true;
  }
};

function borrarProducto(){
  productos.splice(index,1);
  localStorage.setItem("prod",JSON.stringify(productos));
  anteriorProducto();
};

function buscarProducto(){
  var productoBuscado=productos.find((producto)=>{
    if(producto.codigo===inputProdABuscar.value)
    {return 1}
  });

  index=productos.findIndex(function(producto){/*busca ubicacion del codigo del producto buscado*/
    return producto.codigo===inputProdABuscar.value;
  });

  inputCodigoProd.value=productoBuscado.codigo;
  inputDescripcionProd.value=productoBuscado.descripcion;
  inputPresentacionProd.value=productoBuscado.presentacion;
  inputPrecioProd.value=productoBuscado.precio;
};