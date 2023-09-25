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

    const URL = `https://netflix-data.p.rapidapi.com/search/?query=${busqueda}&offset=0&limit_titles=4&limit_suggestions=1`;
    const OPTIONS = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b34f09974emshd0ac76bd2f80487p1d8c7bjsnb20d8353cf36',
        'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
      }
    };

    fetch(URL, OPTIONS)
    .then((response) => response.json())
    .then((peliculas) => {setPeliculas(peliculas)});
  }, [busqueda])

  return (
    <div className="App">
      <h1 className='titulo-app'>PELÍCULAS Y SERIES DE NETFLIX</h1>
      <input className='busqueda-movie' type="text" value={busqueda} onChange={busquedaOnChange} placeholder="Breaking Bad"/>

      <div className='lista-peliculas'>
        {peliculas.titles?.map((peli) => <Movie key={peli.summary.id} title={peli.jawSummary.title} synopsis={peli.jawSummary.synopsis} img={peli.jawSummary.logoImage.url}/>)}
      </div>

    </div>
    );
}

export default App;
