const elements = [
    {tag: 'p', text: 'Qualquer texto'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'section', text: 'Frase 3'},
    {tag: 'footer', text: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    
    let { tag, text } = elements[i]; // associação via desestruturação
    let createTag = document.createElement(tag);
    
    createTag.innerText = text;

    div.appendChild(createTag); // add cada elemento na div
}

container.appendChild(div); // add a div dentro do container
