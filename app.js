function hablar(texto) {
  const mensaje = new SpeechSynthesisUtterance(texto);
  mensaje.lang = "es-CO";
  speechSynthesis.speak(mensaje);
  document.getElementById("respuesta").textContent = texto;
}

function saludar() {
  hablar("Hola, Jefe. Soy Robotina, su secretaria personal. Estoy lista para ayudarlo.");
}

function iniciarReconocimiento() {
  const reconocimiento = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  reconocimiento.lang = "es-CO";
  reconocimiento.start();
  hablar("Estoy escuchando, Jefe...");

  reconocimiento.onresult = function(event) {
    const comando = event.results[0][0].transcript.toLowerCase();
    procesarComando(comando);
  };

  reconocimiento.onerror = function(event) {
    hablar("Lo siento, Jefe. Inténtelo de nuevo.");
  };
}

function procesarComando(comando) {
  if (comando.includes("agenda")) {
    hablar("Claro Jefe, hoy tiene reunión con el equipo a las 10 AM y llamada a las 3 PM.");
  } else if (comando.includes("tareas")) {
    hablar("Sus tareas de hoy son: revisar correos, enviar reporte y llamar al cliente.");
  } else if (comando.includes("pagos")) {
    hablar("Debe pagar el recibo de la luz y el internet antes de las 5 PM.");
  } else if (comando.includes("llamar")) {
    hablar("¿A quién desea que llame, Jefe?");
  } else {
    hablar("Lo siento, Jefe. No entendí el comando. Puede repetirlo.");
  }
}
