// Carousel
const carouselSlide = document.querySelector(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

function carousel() {
  const images = carouselSlide.getElementsByTagName("img");
  const imageWidth = images[0].clientWidth;
  let counter = 1;

  function moveToNextSlide() {
    if (counter >= images.length) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;
    counter++;
  }

  function moveToPrevSlide() {
    if (counter <= 1) return;
    counter--;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-imageWidth * (counter - 1)}px)`;
  }

  nextButton.addEventListener("click", moveToNextSlide);
  prevButton.addEventListener("click", moveToPrevSlide);

  setInterval(moveToNextSlide, 3000);
}

carousel();

// Ver Mas
function openDescriptionModal() {
  var descriptionOverlay = document.getElementById('description-overlay');
  var descriptionModal = document.getElementById('description-modal');
  descriptionOverlay.style.display = 'block';
  descriptionModal.style.display = 'block';
}

function closeDescriptionModal() {
  var descriptionOverlay = document.getElementById('description-overlay');
  var descriptionModal = document.getElementById('description-modal');
  descriptionOverlay.style.display = 'none';
  descriptionModal.style.display = 'none';
}


// Formulario
const btnLanzarmodal = document.querySelector('#lanzar-modal');
const btnOcultarmodal = document.querySelector('#ocultar-modal');

const contModal = document.querySelector('.contenedor-modal');

const nombreInput = document.querySelector('#nombre');
const apellidosInput = document.querySelector('#apellidos');
const edadInput = document.querySelector('#edad');
const departamentoInput = document.querySelector('#departamento');
const ciudadInput = document.querySelector('#ciudad');
const siInput = document.querySelector('#si');
const noInput = document.querySelector('#no');

btnLanzarmodal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.add('mostrar');

});

btnOcultarmodal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.remove('mostrar');
})

inputenviar.addEventListener('click', (evento) => {
  evento.preventDefault();
  let usuario = nombre.value; 
    let lastname = apellidos.value; 
    let email = correo.value; 
    let telefono = celular.value; 
    let years = edad.value; 
    let depart = departamento.value; 
    let residencia = ciudad.value; 
    let exper_si = si.value; 
    let exper_no = no.value;

    let errores=[];
    let datos;
    datosMemoria= JSON.parse(localStorage.getItem('formulario'));
    
    if(!datosMemoria) {
      datos=[];
  } else {
      datos = datosMemoria; 
  }

  if(!usuario){
    errores.push('El nombre debe ser obligatorio'); 
    campoNombre.classList.add("error");
    campoNombre.classList.add("is-invalid"); 
    document.getElementById('errorUsuario').textContent = 'El campo nombre debe ser obligatorio';
    } else if(usuario.length < 10) {
        campoNombre.classList.add("is-invalid")
        document.getElementById('errorUsuario').textContent = 'El Nombre debe tener minimo 10 caracteres';    
    }

    if(!lastname){
      errores.push('El apellido debe ser obligatorio'); 
      campoApellido.classList.add("is-invalid")
      document.getElementById('errorApellido').textContent = 'El campo apellido debe ser obligatorio';
  } else if (lastname.length < 10) {
      campoApellido.classList.add("is-invalid")
      document.getElementById('errorApellido').textContent = 'El apellido debe tener minimo 10 caracteres';    
  }

  if(!email){
    errores.push('El correo debe ser obligatorio'); 
    campoEmail.classList.add("is-invalid")
    document.getElementById('errorCorreo').textContent = 'El campo correo debe ser obligatorio';
}  else if (!validarEmail(email)) {
    errores.push('El correo debe ser obligatorio')
    campoEmail.classList.add("is-invalid")
    document.getElementById('errorCorreo').textContent = 'El correo electrónico no es válido';
}

if(!telefono){
  errores.push('El telefono debe ser obligatorio'); 
  campoTelefono.classList.add("is-invalid")
  document.getElementById('errorTel').textContent = 'El campo Telefono debe ser obligatorio';
  }

  if(!years){
    errores.push('La edad debe ser obligatoria'); 
    campoFecha.classList.add("is-invalid")
    document.getElementById('errorEdad').textContent = 'El campo edad debe ser obligatorio';
 }

 if(!depart){
  errores.push('La Departamento debe ser obligatoria'); 
  campoFecha.classList.add("is-invalid")
  document.getElementById('errorDepart').textContent = 'El campo Departamento debe ser obligatorio';
}

if(!residencia){
  errores.push('La ciudadDepartamento debe ser obligatoria'); 
  campoFecha.classList.add("is-invalid")
  document.getElementById('errorResidencia').textContent = 'El campo Ciudad debe ser obligatorio';
}
if(errores.length == 0) {
  let datosEnvios = {
      usuario,
      apellidos,
      years,
      email,
      telefono,
      depart,
      residencia
  }
  citas.push(datosEnvios)
  localStorage.setItem('formulario', JSON.stringify(datos))
}  
})