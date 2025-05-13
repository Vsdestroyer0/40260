// Cargar el XML de forma asíncrona
async function loadXMLDoc() {
    try {
        const response = await fetch('cd_catalog.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        const cds = xmlDoc.getElementsByTagName("CD");
        myFuncion(cds);
    } catch(error) {
        console.error("Error al cargar XML", error);
    }
}

// Función para mostrar los datos en la tabla
function myFuncion(cds) {
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    Array.from(cds).forEach(cd => {
        const artist = cd.getElementsByTagName("ARTIST")[0]?.textContent || "N/A";
        const title = cd.getElementsByTagName("TITLE")[0]?.textContent || "N/A";
        table += `<tr><td>${artist}</td><td>${title}</td></tr>`;
    });
    document.getElementById("demo").innerHTML = table;
}

// Agregar event listener cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cargarBtn').addEventListener('click', loadXMLDoc);
});

// Exportar las funciones si se necesitan en otros módulos
export { loadXMLDoc, myFuncion };