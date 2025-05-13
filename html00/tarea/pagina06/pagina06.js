async function createImageElement(id, nombre) {
    const url = `https://picsum.photos/id/${id}/200/200`;
    const template = `
        <figure> 
            <img src="${url}" alt="${nombre}" class="redonda">
            <figcaption>${nombre}</figcaption>
        </figure>
    `;
    return template;
}

async function initGallery() {
    const app = document.getElementById('app');
    const people = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Mary" }
    ];

    const imagesHTML = await Promise.all(
        people.map(person => createImageElement(person.id, person.name))
    );
    
    app.innerHTML = imagesHTML.join('');

    const images = app.querySelectorAll('img');
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            toggleImageShape(img);
            saludar(people[index].name);
        });
    });
}

function toggleImageShape(img) {
    img.classList.toggle('redonda');
    img.classList.toggle('cuadrada');
}
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

document.addEventListener('DOMContentLoaded', initGallery);

export { createImageElement, initGallery, toggleImageShape, saludar };