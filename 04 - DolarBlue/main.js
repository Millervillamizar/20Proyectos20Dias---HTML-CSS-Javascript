// Función para actualizar la fecha
function updateDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString(); // Obtiene la fecha y hora en formato legible

  // Actualiza el contenido del elemento con el ID "current-date"
  document.getElementById("current-date").textContent = "Fecha y hora: " + formattedDate;
}

// Actualiza la fecha cada segundo (1000 milisegundos)
setInterval(updateDate, 1000);

// Llama a la función updateDate para mostrar la fecha inicialmente
updateDate();

// Realiza una solicitud GET a la API
fetch('https://api.bluelytics.com.ar/v2/latest')
.then(response => response.json())
.then(data => {
  // Accede a los valores de "blue" en los datos recibidos
  const blueData = data.blue;

  // Accede a los elementos HTML
  const blueAvgElement = document.getElementById('blueAvg');
  const blueSellElement = document.getElementById('blueSell');
  const blueBuyElement = document.getElementById('blueBuy');

  // Actualiza el contenido de los elementos HTML con los valores de "blue"
  blueAvgElement.textContent = 'Valor promedio: ' + blueData.value_avg;
  blueSellElement.textContent = 'Valor Venta:    ' +  blueData.value_sell;
  blueBuyElement.textContent = 'Valor Compra:    ' + blueData.value_buy;
})
.catch(error => {
  console.error('Error al obtener datos de la API:', error);
});
