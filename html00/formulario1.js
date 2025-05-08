document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
  
    if (nombre && email && direccion && ciudad) {
      alert("Formulario enviado correctamente.");
      // Aquí podrías agregar envío real con fetch o similar
      this.reset();
    } else {
      alert("Por favor completa todos los campos.");
    }
});