class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=21292d868446bb234d1513fbdaef4b3a&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            }else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
export default DataSource;