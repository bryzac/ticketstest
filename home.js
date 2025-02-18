// Función para crear la tarjeta en Trello
function crearTarjetaTrello(datosTarjeta) {
  const apiKey = 'TU_API_KEY_TRELLO';
  const token = 'TU_TOKEN_TRELLO';
  const idLista = 'ID_DE_LA_LISTA_TRELLO';

  fetch(`https://api.trello.com/1/cards?idList=${idLista}&key=${apiKey}&token=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosTarjeta)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Tarjeta creada:', data);
  })
  .catch(error => {
    console.error('Error al crear la tarjeta:', error);
  });
}

// Escuchar el evento de fin de chat en LiveChat
LiveChat.on('chat:ended', function(event) {
  // Obtener información del chat
  const mensaje = event.thread.messages[event.thread.messages.length - 1].text;
  // ... (Obtener otra información relevante)

  // Mostrar formulario al agente
  // ... (Código para crear el formulario)

  // Cuando el agente envía el formulario
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const listaSeleccionada = // ... (Obtener lista seleccionada)
    const etiquetas = // ... (Obtener etiquetas)
    const tituloTarjeta = // ... (Obtener título de la tarjeta)

    const datosTarjeta = {
      name: tituloTarjeta,
      desc: mensaje,
      idList: listaSeleccionada,
      // ... (Añadir etiquetas si es necesario)
    };

    crearTarjetaTrello(datosTarjeta);
  });
});
