function hablarRobotina(texto = "Hola jefe, soy Robotina y estoy lista para servirle. ¿Qué desea que haga hoy?") {
  const mensaje = new SpeechSynthesisUtterance(texto);
  mensaje.lang = "es-CO";
  speechSynthesis.speak(mensaje);
}

function escucharOrden() {
  const reconocimiento = new webkitSpeechRecognition() || new SpeechRecognition();
  reconocimiento.lang = "es-CO";
  reconocimiento.continuous = false;
  reconocimiento.interimResults = false;

  hablarRobotina("Estoy escuchando, jefe...");

  reconocimiento.start();

  reconocimiento.onresult = (event) => {
    const texto = event.results[0][0].transcript;
    document.getElementById("transcripcion").textContent = texto;
    procesarOrden(texto.toLowerCase());
  };

  reconocimiento.onerror = () => {
    hablarRobotina("Lo siento jefe, no entendí. Intente de nuevo.");
  };
}

function procesarOrden(orden) {
  if (orden.includes("tareas de hoy")) {
    hablarRobotina("Jefe, hoy debe enviar el informe, pagar el internet, y llamar a la señora Sandra a las 4 de la tarde.");
  } else if (orden.includes("agenda")) {
    hablarRobotina("Jefe, su agenda está libre hasta las 3 de la tarde.");
  } else if (orden.includes("pagar")) {
    hablarRobotina("Tiene que pagar el recibo de la luz hoy antes de las 6 p.m.");
  } else if (orden.includes("llamar")) {
    hablarRobotina("Debe llamar a Juan Pérez a las 5 de la tarde.");
  } else if (orden.includes("gracias")) {
    hablarRobotina("Con gusto, jefe.");
  } else {
    hablarRobotina("Jefe, no entendí la orden. ¿Podría repetirlo?");
  }
}
