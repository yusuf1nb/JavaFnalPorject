const name = localStorage.getItem("name");
const id = localStorage.getItem("title");


async function main(name) {
  const movies = await fetch(`https://www.omdbapi.com/?apikey=40f21eea&s=${name}`);
  const moviesData = await movies.json();
  const moviesWrapper = document.querySelector(".movies");
  moviesWrapper.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
  console.log(name)
}

main();

function movieHTML(movie) {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src=${movie.Poster} alt="">
    </figure>
    <div class="movie__title">
        ${movie.Title} (${movie.Year})
    </div>
    <div class="movie__rating">
        4.5/5
    </div>
    </div>`;
}

function showMovies(titleName) {
    localStorage.setItem("title", titleName)
    window.location.href = `${window.location.origin}/movies.html`
}

async function onSearchChange(event) {
    const name = event.target.value
    main(name)

}