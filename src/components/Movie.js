import propTypes from "prop-types";

function Movie({ coverImage, title, summary, genres }) {
    return( 
    <div>
        <img src={coverImage} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map(g =>
                <li key={g}>{g}</li>
            )}
        </ul>
    </div>
    );
}

Movie.propTypes = {
    coverImage: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;