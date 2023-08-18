import {html, render} from "./node_modules/lit-html/lit-html.js";

const enterBtn = document.querySelector('.enterBtn');
const parentDiv = document.querySelector('.notesDiv');
const input = document.querySelector('.content');

enterBtn.addEventListener('click', createNote);

const createTemplate= () => html`<p class="quotes">${input.textContent} <button @click="${deleteNote}" class="deleteBtn"><img src="./images/icons8-x-50.png" height="25px" alt="del icon"></button></p>`;

function createNote(){
    let div = document.createElement('div');
    div.style.width = "350px";
    div.style.height = "fit-content";
    render(createTemplate(), div);

    parentDiv.appendChild(div);
    
}

function deleteNote(e){
    const target = e.target.parentNode.parentNode;
    console.log(target);
    target.remove();
    
}




