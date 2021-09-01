const myForm = document.querySelector('.my-form');
const newImageElement = document.querySelector('#new-image');
const newTitle = document.querySelector('#new-title');
const newDes = document.querySelector('#new-des');

let newImageValue;

newImageElement.addEventListener('change', (ev) => {
    const [file] = newImageElement.files;
    if (file) newImageValue = URL.createObjectURL(file);
})

const addNewElement = (element, classes, value = null) => {
    const newElement = document.createElement(element);
    classes.forEach(key => newElement.classList.add(key));
    newElement.innerHTML = value;
    return newElement;
}

const addNewCard = (image, title, des) => {
    const card = addNewElement('div', ['card']);
    const cardImage = addNewElement('img', ['card-img-top']);
    cardImage.src = image;
    const cardBody = addNewElement('div', ['card-body']);
    const cardTitle = addNewElement('h5', ['card-title'], title);
    const cardDes = addNewElement('p', ['card-tex'], des);
    card.append(cardImage);
    card.append(cardBody);
    cardBody.append(cardTitle);
    cardBody.append(cardDes);
    return card;
}

myForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const newCard = addNewCard(newImageValue, newTitle.value, newDes.value);
    document.querySelector('.cards').append(newCard);
})
