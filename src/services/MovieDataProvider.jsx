function fetchData(url, options) {
    try {
        return fetch(url, options);
    } catch (error) {
        console.error(error);
    }
}

export default function getMovies(){

    const URL = 'https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=2';
    const OPTIONS = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7f9957d316mshe8a676c0e954363p1bb84fjsn6c7ee451e234',
        'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
      }
    };

    let movies = [];
    let cont = 0;


    fetchData(URL, OPTIONS)
    .then((response) => response.json())
    .then(data => {

        data.titles.forEach(movie => {
            let id = cont;
            let title = movie.jawSummary.title;
            let synopsis = movie.jawSummary.synopsis;
    
            movies.push({id, title, synopsis});
            cont++;
        });
        console.log("LGJKNGFDBHKNJFDHKJFDSBLJHGFDS");
        return movies;
    });
}

