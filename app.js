const robotina = window.speechSynthesis;
const reconocimiento = window.SpeechRecognition || window.webkitSpeechRecognition;
const reconocer = new reconocimiento();
reconocer.lang = 'es-ES';

function hablar(texto = 'Hola humano, soy Robotina, tu secretaria personal') {
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = 'es-ES';
  robotina.speak(voz);
}

function iniciarEscucha() {
  reconocer.start();
  hablar('Te escucho, ¿qué orden tienes para mí?');
}

let tareas = [];

reconocer.onresult = function(event) {
  const orden = event.results[0][0].transcript.toLowerCase();
  document.getElementById('resultado').innerText = 'Orden recibida: ' + orden;

  if (orden.includes('agrega tarea')) {
    const tarea = orden.replace('agrega tarea', '').trim();
    tareas.push(tarea);
    hablar(`Tarea "${tarea}" agregada a tu lista`);
  } else if (orden.includes('qué tareas tengo') || orden.includes('listar tareas')) {
    if (tareas.length === 0) {
      hablar('No tienes tareas pendientes');
    } else {
      hablar('Estas son tus tareas: ' + tareas.join(', '));
    }
  } else if (orden.includes('saluda')) {
    hablar('Hola humano, ¿cómo puedo ayudarte hoy?');
  } else {
    hablar('Lo siento, no entendí esa orden');
  }
};
