import { moviesData } from "./data";

const moviesEl = document.getElementById('movie-lst');


function renderList(){
    const renderList = movieList()
}

function movieList(){
    const movieArr = []
    for(let movie of moviesData){
        for(let genres of movie.genreTags){
            if(!movieArr.includes(genres))
                movieArr.push(genres)
        }
    }
    return movieArr
}