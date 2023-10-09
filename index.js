let addMovie = (event) => {
event.preventDefault();
let inputField = document.querySelector('input');

const movie = document.createElement('li');

const movieTitle = document.createElement("span");
movieTitle.textContent = inputField.value;
movie.appendChild(movieTitle);

const list = document.querySelector("ul");
list.appendChild(movie);

inputField.value = ''
}

document.querySelector("form").addEventListener("submit", addMovie);

