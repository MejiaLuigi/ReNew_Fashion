let memoria = window !== undefined ? JSON.parse(localStorage.getItem("formulario")) : [];


let contiene = document.getElementById("contiene");


// Verificar si el contenedor existe antes de agregar las filas
// (contiene) 

console.log(memoria)
  memoria.forEach(function(datos) { 
    
    let fila = document.createElement("div");
    fila.classList.add("conta","container", "row", "my-5", "shadow", "text-center", "p-5");
  
    let columnaUno = document.createElement("div");
    columnaUno.classList.add("col-md-4");
  
    let columnaDos = document.createElement("div");
    columnaDos.classList.add("claseDos","col-md-8", "border-start", "p-4");
  
    let titulo = document.createElement("h1");
    titulo.textContent = "Personal Inscrito";
  
    let usuario = document.createElement("h3");
    usuario.textContent = "Nombre: " + datos.usuario;

    let lastname = document.createElement("h3");
  lastname.textContent = "Apellidos: " + datos.apellido;

  let doc = document.createElement("p");
  doc.textContent = "Su número de ID: " +datos.documento;

  let correo = document.createElement("p");
  correo.textContent = "Correo: " +datos.email;

  let num = document.createElement("p");
  num.textContent = "Número Celular: " +datos.telefono

  let years = document.createElement("p");
  years.textContent= "Su Edad Es: " +datos.edad+ " Años"

  let xp = document.createElement("p");
  xp.textContent = +datos.experiencia;

  

    columnaUno.appendChild(titulo);
    columnaDos.appendChild(usuario);
    columnaDos.appendChild(lastname);
    columnaDos.appendChild(doc);
    columnaDos.appendChild(correo);
    columnaDos.appendChild(num);
    columnaDos.appendChild(years);
    columnaDos.appendChild(xp);
    fila.appendChild(columnaUno);
    fila.appendChild(columnaDos);
  contiene.appendChild(fila);
  }); 

 /*else {
  console.error("No se pudo encontrar el elemento contenedor");
}*/
    // Código para crear y agregar filas
    /*let fila = document.createElement("section");
  fila.classList.add("container", "row", "my-5", "shadow", "text-center", "p-5");

  let columnaUno = document.createElement("section");
  columnaUno.classList.add("col-4");

  let columnaDos = document.createElement("section");
  columnaDos.classList.add("col-8", "border-start", "p-4");

  let titulo = document.createElement("h1");
  titulo.textContent = "Personal Inscrito";

  let usuario = document.createElement("h3");
  usuario.textContent = "Nombre: " + datos.usuario;

  let lastname = document.createElement("p");
  lastname.textContent = "Apellidos: " + datos.apellido;

  let email = document.createElement("p");
  email.textContent = "Email: " + datos.email;

  let telefono = document.createElement("p");
  telefono.textContent = "Número de Celular: " + datos.telefono;

  let years = document.createElement("p");
  years.textContent = "La Edad es: " + datos.edad;

  let depart = document.createElement("p");
  depart.textContent = "Departamento: " + datos.departamento;

  let residencia = document.createElement("p");
  residencia.textContent = "Ciudad: " + datos.residencia;

    // Agregar la fila al contenedor
    columnaUno.appendChild(titulo);
      columnaDos.appendChild(usuario);
      columnaDos.appendChild(lastname);
      columnaDos.appendChild(email);
      columnaDos.appendChild(telefono);
      columnaDos.appendChild(years);
      columnaDos.appendChild(depart);
      columnaDos.appendChild(residencia);
      fila.appendChild(columnaUno);
      fila.appendChild(columnaDos);
    contenedor.appendChild(fila);*/
 



// memoria.forEach(function (datos) {
//   let fila = document.createElement("section");
//   fila.classList.add("container", "row", "my-5", "shadow", "text-center", "p-5");

//   let columnaUno = document.createElement("section");
//   columnaUno.classList.add("col-4");

//   let columnaDos = document.createElement("section");
//   columnaDos.classList.add("col-8", "border-start", "p-4");

//   let titulo = document.createElement("h1");
//   titulo.textContent = "Personal Inscrito";

//   let usuario = document.createElement("h3");
//   usuario.textContent = "Nombre: " + datos.usuario;

//   let lastname = document.createElement("p");
//   lastname.textContent = "Apellidos: " + datos.apellido;

//   let email = document.createElement("p");
//   email.textContent = "Email: " + datos.email;

//   let telefono = document.createElement("p");
//   telefono.textContent = "Número de Celular: " + datos.telefono;

//   let years = document.createElement("p");
//   years.textContent = "La Edad es: " + datos.edad;

//   let depart = document.createElement("p");
//   depart.textContent = "Departamento: " + datos.departamento;

//   let residencia = document.createElement("p");
//   residencia.textContent = "Ciudad: " + datos.residencia;

//   columnaUno.appendChild(titulo);
//   columnaDos.appendChild(usuario);
//   columnaDos.appendChild(lastname);
//   columnaDos.appendChild(email);
//   columnaDos.appendChild(telefono);
//   columnaDos.appendChild(years);
//   columnaDos.appendChild(depart);
//   columnaDos.appendChild(residencia);
//   fila.appendChild(columnaUno);
//   fila.appendChild(columnaDos);
//   contenedor.appendChild(fila);
// });


// memoria.forEach((datosMemoria) => {
//     let fila=document.createElement("div")
//     fila.classList.add("row","my-5","shadow","text-center","p-5")

//     let columnaUno=document.createElement("div")
//     columnaUno.classList.add("col-4")

//     let columnaDos=document.createElement("div")
//     columnaDos.classList.add("col-8","border-start","p-4")

//     let titulo=document.createElement("h1")
//     titulo.textContent="Personal Inscrito"

//     let usuario=document.createElement("h3")
//     usuario.textContent= +datos.usuario

//     let lastname=document.createElement("p")
//     documento.textContent=+datos.apellidos

//     let email=document.createElement("p")
//     email.textContent="Email: "+datos.correo

//     let telefono=document.createElement("p")
//     telefono.textContent="Número de Celular: "+datos.celular

//     let years=document.createElement("p")
//     years.textContent="La Edad es: "+datos.edad

//     let depart=document.createElement("p")
//     depart.textContent="Departamento: "+datos.departamento

//     let residencia=document.createElement("p")
//     residencia.textContent="Ciudad: "+datos.ciudad

//     columnaUno.appendChild(titulo)
//     columnaDos.appendChild(usuario)
//     columnaDos.appendChild(lastname)
//     columnaDos.appendChild(email)
//     columnaDos.appendChild(telefono)
//     columnaDos.appendChild(years)
//     columnaDos.appendChild(editar);
//     columnaDos.appendChild(cancelar);
//     fila.appendChild(columnaUno)
//     fila.appendChild(columnaDos)
//     contenedor.appendChild(fila)
    
// });

// memoria.forEach(function(datosMemoria){

//     let fila=document.createElement("div")
//     fila.classList.add("row","my-5","shadow","text-center","p-5")

//     let columnaUno=document.createElement("div")
//     columnaUno.classList.add("col-4")

//     let columnaDos=document.createElement("div")
//     columnaDos.classList.add("col-8","border-start","p-4")

//     let titulo=document.createElement("h1")
//     titulo.textContent="Personal Inscrito"

//     let usuario=document.createElement("h3")
//     usuario.textContent= +datos.usuario

//     let lastname=document.createElement("p")
//     documento.textContent=+datos.apellidos

//     let email=document.createElement("p")
//     email.textContent="Email: "+datos.correo

//     let telefono=document.createElement("p")
//     telefono.textContent="Número de Celular: "+datos.celular

//     let years=document.createElement("p")
//     years.textContent="La Edad es: "+datos.edad

//     let depart=document.createElement("p")
//     depart.textContent="Departamento: "+datos.departamento

//     let residencia=document.createElement("p")
//     residencia.textContent="Ciudad: "+datos.ciudad

//     columnaUno.appendChild(titulo)
//     columnaDos.appendChild(usuario)
//     columnaDos.appendChild(lastname)
//     columnaDos.appendChild(email)
//     columnaDos.appendChild(telefono)
//     columnaDos.appendChild(years)
//     columnaDos.appendChild(editar);
//     columnaDos.appendChild(cancelar);
//     fila.appendChild(columnaUno)
//     fila.appendChild(columnaDos)
//     contenedor.appendChild(fila)
// })