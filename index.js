import { moviesData } from "./data.js";

const moviesEl = document.getElementById('movie-lst');
const submitEl = document.getElementById('submit-btn')
const renderMovie = document.getElementById('rendered-movie')



moviesEl.addEventListener("change", selectedMovieGenre)
submitEl.addEventListener('click', renderedMovie)


function selectedMovieGenre(e){
    const movieRendered = document.getElementsByClassName('movieRendered')
    for(let movie of movieRendered){
        movie.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
    
}
function movieObjectArray(){
    const selectedRadio = document.querySelector('input[type="radio"]:checked')

    if(!selectedRadio){
        return []
    }

    const movieChoice = selectedRadio.value

    const matchMovieArray = moviesData.filter(function(movie){
        return movie.genreTags.includes(movieChoice)
    })

    return matchMovieArray
}

function singleMovieSelection(){
    let movieArray = movieObjectArray()

    if(movieArray.length === 0){
        return null
    }

    if(movieArray.length === 1){
        return movieArray[0]
    } else {
        let randomChoice = Math.floor(Math.random() * movieArray.length)
        return movieArray[randomChoice]
    }
}

function renderedMovie(){
    const movieSelected = singleMovieSelection()
    renderMovie.innerHTML = `<p class="movieSelected">The movie that was selected for you is ${movieSelected.title} </p>`
    submitEl.style.display = 'none'
    moviesEl.style.display = 'none'
    console.log(movieSelected)
}


function renderList(){
    const renderList = movieList()
    let html = ""

    for(let genres of renderList){
        html += `
        <div class="movieRendered">
            <label for="${genres}">${genres}</label>
            <input class="movieRendered" type="radio" id="${genres}" name="genres" value="${genres }">
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