function hola(){
    let ejemplo = document.getElementById("demo");
    console.log(ejemplo);
    ejemplo.innerHTML = "hola";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", hola);
});

export {hola};