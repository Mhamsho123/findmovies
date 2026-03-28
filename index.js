import { moviesData } from "./data.js";

const moviesEl = document.getElementById('movie-lst');


function renderList(){
    const renderList = movieList()
    let html = ""

    for(let genres of renderList){
        html += `
        <div class="movieRendered">
            <label for="${genres}">${genres}</label>
            <input type="radio" id="${genres}" name="genres" value="${genres }">
        </div>
    `
    }
    moviesEl.innerHTML = html
}

function movieList(){
    const movieArr = []
    for(let movie of moviesData){
        for(let genre of movie.genreTags){
            if(!movieArr.includes(genre))
                movieArr.push(genre)
        }
    }
    return movieArr
}


renderList()