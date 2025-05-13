function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = xhttp.responseXML;
        const cd = xmlDoc.getElementsByTagName("CD");
        myFunction(cd);
    }
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
}

function myFunction(cd) {
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < cd.length; i++) {
        table += "<tr><td>" +
        cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

// Agregar el event listener cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('cargarBtn').addEventListener('click', loadXMLDoc);
});

export { loadXMLDoc, myFunction };