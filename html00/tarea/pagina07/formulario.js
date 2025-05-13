// Función para manejar el envío del formulario
function enviarBusqueda() {
    // Obtener referencias a los elementos del DOM
    const user = document.getElementById("user");
    const password = document.getElementById("password");
    const formulario = document.getElementsByTagName("form")[0];
    
    // Mostrar valores en consola
    console.log("Usuario:", user.value);
    console.log("Contraseña:", password.value);
    
    // Configurar el formulario para la búsqueda en Google
    user.setAttribute("name", "q");
    password.setAttribute("name", "password");
    formulario.setAttribute("action", "https://google.com/search");
    
    // Enviar el formulario
    formulario.submit();
}

// Función para inicializar el evento
function init() {
    const boton = document.getElementById("enviar");
    if (boton) {
        boton.addEventListener("click", enviarBusqueda);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);

// Exportar las funciones para pruebas
export { enviarBusqueda, init };