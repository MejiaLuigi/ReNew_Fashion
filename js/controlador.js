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

btnLanzarmodal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.add('mostrar');
});

btnOcultarmodal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.remove('mostrar');
})