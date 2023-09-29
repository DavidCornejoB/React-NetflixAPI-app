import './App.css';
import Movie from './components/Movie';
import { useState, useEffect } from 'react';

function App() {

  const [peliculas, setPeliculas ] = useState([]);
  const [ busqueda, setBusqueda ] = useState("Breaking Bad");

  const busquedaOnChange = (event) => {
    setBusqueda(event.target.value);
}

  useEffect(() => {

    try {

      const URL = `https://netflix-data.p.rapidapi.com/search/?query=${busqueda}&offset=0&limit_titles=5&limit_suggestions=1`;
      const OPTIONS = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4670cc2d3emshad2b33acdeb3718p1c10f7jsna189311f4fc2',
          'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
        }
      };
  
      fetch(URL, OPTIONS)
      .then((response) => response.json())
      .then((peliculas) => {
        //console.log(peliculas);
        peliculas.titles.forEach((peli) => {
          if (peli.jawSummary.hasOwnProperty("logoImage") === false){
            console.log("error en: " + peli.jawSummary.title);
            let extra = {logoImage: {url: ""}}
            Object.assign(peli.jawSummary, extra);
            //console.log(peli);
          }
        });
        setPeliculas(peliculas);
      });
      
    } catch (error) {
      console.log(error);
    }

  }, [busqueda])

  return (
    <div className="App">
      <h1 className='titulo-app'>PELÍCULAS Y SERIES DE NETFLIX</h1>
      <input className='busqueda-movie' type="text" value={busqueda} onChange={busquedaOnChange} placeholder="Breaking Bad"/>

      <div className='lista-peliculas'>
        {peliculas.titles ? peliculas.titles.map((peli) => <Movie key={peli.summary.id} title={peli.jawSummary.title} synopsis={peli.jawSummary.synopsis} img={peli.jawSummary.logoImage.url} />) : <div>No se ha encontrado ninguna pelicula</div>}
      </div>

    </div>
    );
}

export default App;
