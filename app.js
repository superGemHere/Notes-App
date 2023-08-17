const enterBtn = document.querySelector('.enterBtn');
const parentDiv = document.querySelector('.notesDiv');
const input = document.querySelector('.content');

enterBtn.addEventListener('click', createNote);




function createNote(){
    let divEl = document.createElement('div');
    divEl.style.width="350px" ;
    divEl.style.height="fit-content"; 
    divEl.innerHTML = `<p class="quotes">${input.textContent} <button class="deleteBtn"><img src="./images/icons8-x-50.png" height="25px" alt="del icon"></button></p>`;
    parentDiv.appendChild(divEl);
}