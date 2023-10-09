let addMovie = (event) => {
event.preventDefault();
let inputField = document.querySelector('input');

const movie = document.createElement('li');

const movieTitle = document.createElement("span");
movieTitle.textContent = inputField.value;
movie.appendChild(movieTitle);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);

const list = document.querySelector("ul");
list.appendChild(movie);

inputField.value = '';
}

document.querySelector("form").addEventListener("submit", addMovie);

let deleteMovie = (event) => {
    event.target.parentNode.remove();
}