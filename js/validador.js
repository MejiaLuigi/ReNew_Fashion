let memoria = JSON.parse(localStorage.getItem("formularios"));

let contenedor = document.getElementById("contenedor");

memoria.forEach(function(datos){

    let fila=document.createElement("section.container")
    fila.classList.add("row","my-5","shadow","text-center","p-5")

    let columnaUno=document.createElement("section.izq")
    columnaUno.classList.add("col-4")

    let columnaDos=document.createElement("section.der")
    columnaDos.classList.add("col-8","border-start","p-4")

    let titulo=document.createElement("h1")
    titulo.textContent="Personal Inscrito"

    let usuario=document.createElement("h3")
    usuario.textContent= +datos.usuario

    let lastname=document.createElement("p")
    documento.textContent=+datos.apellidos

    let email=document.createElement("p")
    email.textContent="Email: "+datos.correo

    let telefono=document.createElement("p")
    telefono.textContent="Número de Celular: "+datos.celular

    let years=document.createElement("p")
    years.textContent="La Edad es: "+datos.edad

    let depart=document.createElement("p")
    depart.textContent="Departamento: "+datos.departamento

    let residencia=document.createElement("p")
    residencia.textContent="Ciudad: "+datos.ciudad

    columnaUno.appendChild(titulo)
    columnaDos.appendChild(usuario)
    columnaDos.appendChild(lastname)
    columnaDos.appendChild(email)
    columnaDos.appendChild(telefono)
    columnaDos.appendChild(years)
    columnaDos.appendChild(editar);
    columnaDos.appendChild(cancelar);
    fila.appendChild(columnaUno)
    fila.appendChild(columnaDos)
    contenedor.appendChild(fila)
})