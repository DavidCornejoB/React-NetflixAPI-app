
function Movie (props){

    return(
        <div>
            <h1>Titulo: {props.title}</h1>
            <p>Sinopsis: {props.synopsis}</p>
        </div>
    );
}

export default Movie;