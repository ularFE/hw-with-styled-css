import { useState } from "react";
import styles from './Movies.module.css'
import NewMovie from "../NewMovie/NewMovie";
import MoviesList from "../MoviesList/MoviesList";
import MovieButtons from "../MovieButtons/MovieButtons";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [filtred, setFiltred] = useState([]);
	return (
		<div className={styles.main_div}>
			<NewMovie movies={movies} setMovies={setMovies} setFiltred={setFiltred} />
			<div className={styles.janr_buttons}>
				<MovieButtons />
			</div>

			<MoviesList movies={filtred} />
		</div>
	);
};

export default Movies;
