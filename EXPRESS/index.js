/* servidor WEB común*/
// const http=require ('http');/*permite realizar un servidor web */ 
// http.createServer((req,res)=>{
//   res.end('Acceso a Software');
// }).listen(3000);/* en el puerto 3000 de nuestro localhost*/  

/*para usar un framework, por ejemplo express, hay que instalarlo, en consola se debe poner npm install express*/ 

/* SErvidor WEB con Express*/
const express=require ('express');
const app=express();
//---------SERVIDOR BASICO Y COMUN-----------------

// app.get('/',(req,res)=>{
//   res.end('Mi primer Servidor Express');
// });

// app.get('/detalle',(req,res)=>{
//   res.end('Detalle del Servidor Express');
// });

// app.get('*',(req,res)=>{/* cualquier otro pedido vaya aca*/ 
//   res.end('No existe esa vista');
// });

// ------------- SERVIDOR CON VARIOS METODOS
// app.get('/clientes', (req,res)=>{/*recibir informacion*/
//   res.send("Listado de clientes");
// });

// app.post('/clientes', (req,res)=>{/*enviar información del cliente al servidor*/
//   res.send("Agregando un cliente");
// });

// app.delete('/clientes', (req,res)=>{
//   res.send("Eliminar un cliente");
// });

// app.put('/clientes', (req,res)=>{
//   res.send("Modificando un cliente");
// });

// app.patch('/clientes', (req,res)=>{
//   res.send("Modifica parcialmente un cliente");
// });

// app.get('/',(req,res)=>{
//   res.sendFile('./sonia.jpg',{root:__dirname})//__dirname variable de entorno que tiene todo el nombre de la direccion del archivo
// });


// ---- MANDADO DE IMAGEN Y JSON ------
// app.get('/cliente',(req,res)=>{
//   res.json({
//     "Nombre":"Sonia",
//     "Apellido":"Schröder",
//     "Edad":47
//   });
// });


//----- MANDADO DE MENSAJE----
// app.get('/borrar',(req,res)=>{
//   res.sendStatus(204);
//   console.log("Borrado");
// });

// --------- MANEJO DE TEXT Y JSON EN BODY
// app.use(express.text());//se usa esta sentencia para que pueda leer texto
// app.use(express.json());// se usa para que pueda leer JSON

// app.post('/cliente', (req,res)=>{
//   console.log(req.body);
//   res.send('Cliente Cargado');
// });

app.get('/cliente/:cliente',(req,res)=>{//:cliente es una variable que nos permite cambiar dinamicamente
  res.send(`el cliente es ${req.params.cliente} `);
});

app.get('/cliente/:cliente/imagen',(req,res)=>{
  if (req.params.cliente=="sonia"){
    return res.sendFile('./sonia.jpg',{root:__dirname})//el return termina la funcion o metodo
  }
    res.send(`El Cliente ${cliente} no tiene foto`);

});


app.listen(3000,()=>{
  console.log('escuchado en el puerto 3000');
});

