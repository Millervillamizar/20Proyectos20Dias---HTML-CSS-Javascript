function iniciarReloj() {
    const manecillaHora = document.getElementById("hr");
    const manecillaMinuto = document.getElementById("min");
    const manecillaSegundo = document.getElementById("sec");
  
    function actualizarReloj() {
      const ahora = new Date();
      const horas = ahora.getHours();
      const minutos = ahora.getMinutes();
      const segundos = ahora.getSeconds();
  
      const gradoHora = (horas % 12) * 360 / 12 + (minutos / 60) * 360 / 12;
      const gradoMinuto = (minutos / 60) * 360;
      const gradoSegundo = (segundos / 60) * 360;
  
      manecillaHora.style.transform = `rotate(${gradoHora}deg)`;
      manecillaMinuto.style.transform = `rotate(${gradoMinuto}deg)`;
      manecillaSegundo.style.transform = `rotate(${gradoSegundo}deg)`;
    }
  
    setInterval(actualizarReloj, 1000); // Actualiza el reloj cada segundo.
  }
  
  iniciarReloj();
  