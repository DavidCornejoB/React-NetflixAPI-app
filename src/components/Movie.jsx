import '../stylesheets/Movie.css';

function Movie (props){

    return(
        <div className='tarjeta-movie'>
            <h1 className='titulo-movie'>Titulo: {props.title}</h1>
            <img className='imagen-movie' src={props.img} alt=""/>
            <p className='synopsis-movie'>Sinopsis: {props.synopsis}</p>
        </div>
    );
}

export default Movie;