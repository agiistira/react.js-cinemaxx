import '../component/movie-list.js';
import DataSource from '../data/data-source.js';

const main = function () {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const movieListElement = document.querySelector("movie-list");
  
    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
};
  
    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };
  
  
    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
 };

 export default main;