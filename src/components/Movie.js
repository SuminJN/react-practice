import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

function Movie({ id, coverImage, title, year, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img src={coverImage} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImage: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;