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
        'X-RapidAPI-Key': '7f9957d316mshe8a676c0e954363p1bb84fjsn6c7ee451e234',
        'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
      }
    };

    fetch(URL, OPTIONS)
    .then((response) => response.json())
    .then((peliculas) => {setPeliculas(peliculas)});
  }, [busqueda])

  return (
    <div className="App">
      <h1>PELÍCULAS Y SERIES DE NETFLIX</h1>
      <input type="text" value={busqueda} onChange={busquedaOnChange} placeholder="Breaking Bad"/>

      <ul>
        {peliculas.titles?.map((peli) => <Movie key={peli.summary.id} title={peli.jawSummary.title} synopsis={peli.jawSummary.synopsis}/>)}
      </ul>

    </div>
    );
}

export default App;
