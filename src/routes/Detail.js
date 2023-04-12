import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <div>
                    <span>Loading...</span>
                </div>
            ) : (<div>
                <img src={movie.background_image_original} className={styles.detail__backgroundImg} />
                <div className={styles.detail__contents}>
                    <img src={movie.medium_cover_image} />
                    <h1>{movie.title}</h1>
                    <h2>{movie.year}</h2>
                    <h2>{movie.rating}</h2>
                    <ul>{movie.genres.map((g) => (<li>{g}</li>))}</ul>
                    <h3>{movie.description_full}</h3>
                </div>
            </div>
            )
            }
        </div>
    );
}

export default Detail;