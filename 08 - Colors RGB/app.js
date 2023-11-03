// Obtener los elementos del DOM
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const redText = document.getElementById('text-red');
const greenText = document.getElementById('text-green');
const blueText = document.getElementById('text-blue');

// Agregar eventos para actualizar los valores de los elementos de texto
redSlider.addEventListener('input', updateValue);
greenSlider.addEventListener('input', updateValue);
blueSlider.addEventListener('input', updateValue);

// Llamar a la función updateValue para mostrar los valores iniciales
updateValue();

// Función para actualizar los valores de los elementos de texto y cambiar el color de fondo
function updateValue() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;
  
  // Construir el valor RGB
  const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  
  // Actualizar el texto de los elementos
  redText.innerText = `${redValue}`;
  greenText.innerText = `${greenValue}`;
  blueText.innerText = `${blueValue}`;
  
  // Cambiar el color de fondo del body
  document.body.style.backgroundColor = rgbColor;
}