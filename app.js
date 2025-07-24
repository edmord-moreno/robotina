function hablar() {
  const mensaje = new SpeechSynthesisUtterance("Hola humano, soy tu asistente Robotina. ¿En qué puedo ayudarte?");
  speechSynthesis.speak(mensaje);
}
