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
// const btnLanzarmodal = document.querySelector('#lanzar-modal');
// const btnOcultarmodal = document.querySelector('#ocultar-modal');

// const contModal = document.querySelector('.contenedor-modal');

// const nombreInput = document.querySelector('#nombre');
// const apellidosInput = document.querySelector('#apellidos');
// const edadInput = document.querySelector('#edad');
// const departamentoInput = document.querySelector('#departamento');
// const ciudadInput = document.querySelector('#ciudad');
// const siInput = document.querySelector('#si');
// const noInput = document.querySelector('#no');

// btnLanzarmodal.addEventListener('click', (e) => {
//     e.preventDefault();
//     contModal.classList.add('mostrar');

// });

// btnOcultarmodal.addEventListener('click', (e) => {
//     e.preventDefault();
//     contModal.classList.remove('mostrar');
// })
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
});


// Para validar

const formulario = document.querySelector('form');

/*formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();*/

  /*const usuario = formulario.nombre.value;
  const apellido = formulario.apellidos.value;
  const email = formulario.correo.value;
  const telefono = formulario.celular.value;
  const edad = formulario.edad.value;
  const documento = formulario.documento.value;
  const departamento = formulario.departamento.value;
  const residencia = formulario.ciudad.value;
  const experiencia = formulario.experiencia.value;
  const archivo = formulario.archivo.files[0];*/

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
  
    const campoNombre = document.getElementById('nombre');
    const campoApellido = document.getElementById('apellidos');
    const campoEmail = document.getElementById('correo');
    const campoTelefono = document.getElementById('celular');
    const campoFecha = document.getElementById('edad');
    const campoDocumento = document.getElementById('documento');
    const campoDepartamento = document.getElementById('departamento');
    const campoResidencia = document.getElementById('ciudad');
    const campoArchivo = document.getElementById('archivo');
  
    const usuario = campoNombre.value;
    const apellido = campoApellido.value;
    const email = campoEmail.value;
    const telefono = campoTelefono.value;
    const edad = campoFecha.value;
    const documento = campoDocumento.value;
    const departamento = campoDepartamento.value;
    const residencia = campoResidencia.value;
    const experiencia = formulario.experiencia.value;
    const archivo = campoArchivo.files[0];
  
    let errores = [];
  
    if (!usuario) {
      errores.push('El nombre debe ser obligatorio');
      campoNombre.classList.add('is-invalid');
      document.getElementById('errorUsuario').textContent = 'El campo nombre debe ser obligatorio';
    } else if (usuario.length < 10) {
      campoNombre.classList.add('is-invalid');
      document.getElementById('errorUsuario')
    } else {
      campoNombre.classList.remove('is-invalid');
    }
  
    if (!apellido) {
      errores.push('El apellido debe ser obligatorio');
      campoApellido.classList.add('is-invalid');
      document.getElementById('errorApellido').textContent = 'El campo apellido debe ser obligatorio';
    } else {
      campoApellido.classList.remove('is-invalid');
    }
  
    if (!email) {
      errores.push('El correo debe ser obligatorio');
      campoEmail.classList.add('is-invalid');
      document.getElementById('errorCorreo').textContent = 'El campo correo debe ser obligatorio';
    } else {
      campoEmail.classList.remove('is-invalid');
    }
  
    if (!telefono) {
      errores.push('El teléfono debe ser obligatorio');
      campoTelefono.classList.add('is-invalid');
      document.getElementById('errorTel').textContent = 'El campo Teléfono debe ser obligatorio';
    } else {
      campoTelefono.classList.remove('is-invalid');
    }
  
    if (!edad) {
      errores.push('La edad debe ser obligatoria');
      campoFecha.classList.add('is-invalid');
      document.getElementById('errorEdad').textContent = 'El campo edad debe ser obligatorio';
    } else {
      campoFecha.classList.remove('is-invalid');
    }
  
    if (!departamento) {
      errores.push('El Departamento debe ser obligatorio');
      campoDepartamento.classList.add('is-invalid');
      document.getElementById('errorDepart').textContent = 'El campo Departamento debe ser obligatorio';
    } else {
      campoDepartamento.classList.remove('is-invalid');
    }
  
    if (!residencia) {
      errores.push('La ciudad de residencia debe ser obligatoria');
      campoResidencia.classList.add('is-invalid');
      document.getElementById('errorResidencia').textContent = 'El campo Ciudad debe ser obligatorio';
    } else {
      campoResidencia.classList.remove('is-invalid');
    }
  
    if (!experiencia) {
      errores.push('La experiencia debe ser obligatoria');
    }
  
    if (!archivo) {
      errores.push('El archivo adjunto debe ser obligatorio');
      campoArchivo.classList.add('is-invalid');
      document.getElementById('errorArchivo').textContent = 'El campo archivo adjunto debe ser obligatorio';
    } else {
      campoArchivo.classList.remove('is-invalid');
    }
  
    if (errores.length > 0) {
      // Si hay errores, puedes mostrarlos al usuario o realizar otra acción necesaria.
      for (let i = 0; i < errores.length; i++) {
        console.log(errores[i]); // Muestra cada error en la consola
      }
    } else {
      // Si no hay errores, puedes proceder con el envío del formulario o realizar otras acciones necesarias.
      const datosEnvio = {
        usuario,
        apellido,
        email,
        telefono,
        edad,
        documento,
        departamento,
        residencia,
        experiencia,
        archivo,
      };
  
      let datosMemoria = JSON.parse(localStorage.getItem('formulario')) || [];
      datosMemoria.push(datosEnvio);
      localStorage.setItem('formulario', JSON.stringify(datosMemoria));
  
      formulario.reset();
    }
  });
  
  


 /* const datosEnvio = {
    usuario,
    apellido,
    email,
    telefono,
    edad,
    documento,
    departamento,
    residencia,
    experiencia,
    archivo,
  };

  let datosMemoria = JSON.parse(localStorage.getItem('formulario')) || [];
  datosMemoria.push(datosEnvio);
  localStorage.setItem('formulario', JSON.stringify(datosMemoria));

  formulario.reset();*/
/*});*/



// const inputEnviar = document.getElementById('enviar');
// const campoNombre = document.getElementById('nombre');
// const campoApellido = document.getElementById('apellidos');
// const campoEmail = document.getElementById('correo');
// const campoTelefono = document.getElementById('celular');
// const campoFecha = document.getElementById('edad');
// const campoDepartamento = document.getElementById('departamento');
// const campoResidencia = document.getElementById('ciudad');
// const campoSi = document.getElementById('si');
// const campoNo = document.getElementById('no');
// const campoArchivo = document.getElementById('archivo');

// inputEnviar.addEventListener('click', (evento) => {
//   evento.preventDefault();

//   let usuario = campoNombre.value;
//   let apellido = campoApellido.value;
//   let email = campoEmail.value;
//   let telefono = campoTelefono.value;
//   let edad = campoFecha.value;
//   let departamento = campoDepartamento.value;
//   let residencia = campoResidencia.value;
//   let experiencia = campoSi.checked ? campoSi.value : campoNo.value;
//   let archivo = campoArchivo.value;

//   let errores = [];
//   let datosMemoria = JSON.parse(localStorage.getItem('formulario'));
//   let datos;

//   if (!datosMemoria) {
//     datos = [];
//   } else {
//     datos = datosMemoria;
//   }

//   if (!usuario) {
//     errores.push('El nombre debe ser obligatorio');
//     campoNombre.classList.add('is-invalid');
//     document.getElementById('errorUsuario').textContent = 'El campo nombre debe ser obligatorio';
//   } else if (usuario.length < 10) {
//     campoNombre.classList.add('is-invalid');
//     document.getElementById('errorUsuario').textContent = 'El nombre debe tener al menos 10 caracteres';
//   } else {
//     campoNombre.classList.remove('is-invalid');
//   }

//   if (!apellido) {
//     errores.push('El apellido debe ser obligatorio');
//     campoApellido.classList.add('is-invalid');
//     document.getElementById('errorApellido').textContent = 'El campo apellido debe ser obligatorio';
//   } else if (apellido.length < 10) {
//     campoApellido.classList.add('is-invalid');
//     document.getElementById('errorApellido').textContent = 'El apellido debe tener al menos 10 caracteres';
//   } else {
//     campoApellido.classList.remove('is-invalid');
//   }

//   if (!email) {
//     errores.push('El correo debe ser obligatorio');
//     campoEmail.classList.add('is-invalid');
//     document.getElementById('errorCorreo').textContent = 'El campo correo debe ser obligatorio';
//   } else if (!validarEmail(email)) {
//     errores.push('El correo electrónico no es válido');
//     campoEmail.classList.add('is-invalid');
//     document.getElementById('errorCorreo').textContent = 'El correo electrónico no es válido';
//   } else {
//     campoEmail.classList.remove('is-invalid');
//   }

//   if (!telefono) {
//     errores.push('El teléfono debe ser obligatorio');
//     campoTelefono.classList.add('is-invalid');
//     document.getElementById('errorTel').textContent = 'El campo Teléfono debe ser obligatorio';
//   } else {
//     campoTelefono.classList.remove('is-invalid');
//   }

//   if (!edad) {
//     errores.push('La edad debe ser obligatoria');
//     campoFecha.classList.add('is-invalid');
//     document.getElementById('errorEdad').textContent = 'El campo edad debe ser obligatorio';
//   } else {
//     campoFecha.classList.remove('is-invalid');
//   }

//   if (!departamento) {
//     errores.push('El Departamento debe ser obligatorio');
//     campoDepartamento.classList.add('is-invalid');
//     document.getElementById('errorDepart').textContent = 'El campo Departamento debe ser obligatorio';
//   } else {
//     campoDepartamento.classList.remove('is-invalid');
//   }

//   if (!residencia) {
//     errores.push('La ciudad de residencia debe ser obligatoria');
//     campoResidencia.classList.add('is-invalid');
//     document.getElementById('errorResidencia').textContent = 'El campo Ciudad debe ser obligatorio';
//   } else {
//     campoResidencia.classList.remove('is-invalid');
//   }

//   if (!experiencia) {
//     errores.push('La experiencia debe ser obligatoria');
//   }

//   if (!archivo) {
//     errores.push('El archivo adjunto debe ser obligatorio');
//     campoArchivo.classList.add('is-invalid');
//     document.getElementById('errorArchivo').textContent = 'El campo archivo adjunto debe ser obligatorio';
//   } else {
//     campoArchivo.classList.remove('is-invalid');
//   }

//   if (errores.length === 0) {
//     let datosEnvio = {
//       usuario,
//       apellido,
//       email,
//       telefono,
//       edad,
//       departamento,
//       residencia,
//       experiencia,
//       archivo
//     };

//     datos.push(datosEnvio);
//     localStorage.setItem('formulario', JSON.stringify(datos));
//   }
// });

// function validarEmail(email) {
//   // Expresión regular para validar un correo electrónico
//   const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//   return re.test(email);
// }