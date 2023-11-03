let startTime; // Almacena la hora de inicio del cronómetro
let timerInterval; // Almacena el identificador del intervalo utilizado para actualizar el cronómetro
let isPaused = true; // Indica si el cronómetro está en pausa o no
let elapsedTime = 0; // Almacena el tiempo transcurrido desde el inicio del cronómetro

const timer = document.getElementById('timer'); // Obtiene el elemento HTML con el ID "timer"
const playPauseBtn = document.getElementById('playPauseBtn'); // Obtiene el elemento HTML con el ID "playPauseBtn"
const resetBtn = document.getElementById('resetBtn'); // Obtiene el elemento HTML con el ID "resetBtn"

function startTimer() {
  startTime = Date.now() - elapsedTime; // Establece el tiempo de inicio restando el tiempo transcurrido
  timerInterval = setInterval(updateTimer, 1000); // Actualiza el cronómetro cada segundo
  playPauseBtn.textContent = 'Pause'; // Cambia el texto del botón a "Pause"
  isPaused = false; // Indica que el cronómetro está en funcionamiento
}

function pauseTimer() {
  clearInterval(timerInterval); // Detiene la actualización del cronómetro
  playPauseBtn.textContent = 'Play'; // Cambia el texto del botón a "Play"
  isPaused = true; // Indica que el cronómetro está pausado
}

function resetTimer() {
  clearInterval(timerInterval); // Detiene la actualización del cronómetro
  timer.textContent = '00:00:00'; // Reinicia el tiempo mostrado en el cronómetro
  playPauseBtn.textContent = 'Play'; // Cambia el texto del botón a "Play"
  isPaused = true; // Indica que el cronómetro está pausado
  elapsedTime = 0; // Reinicia el tiempo transcurrido
}

function updateTimer() {
  const currentTime = Date.now(); // Obtiene el tiempo actual
  elapsedTime = currentTime - startTime; // Calcula el tiempo transcurrido
  const seconds = Math.floor(elapsedTime / 1000) % 60; // Calcula los segundos
  const minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // Calcula los minutos
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60); // Calcula las horas
  timer.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`; // Actualiza el tiempo mostrado en el cronómetro
}

function formatTime(time) {
  return time.toString().padStart(2, '0'); // Formatea el tiempo para que tenga dos dígitos
}

playPauseBtn.addEventListener('click', function() {
  if (isPaused) {
    startTimer(); // Inicia el cronómetro si está en pausa
  } else {
    pauseTimer(); // Pausa el cronómetro si está en funcionamiento
  }
});

resetBtn.addEventListener('click', resetTimer); // Reinicia el cronómetro al hacer clic en el botón de reinicio