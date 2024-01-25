import Movie from "../Movie/Movie.jsx";
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
	return (
		<div className={styles.movies_list}>
			{movies.map(({ name, img, janr }) => {
				return <Movie name={name} img={img} janr={janr} />;
			})}
		</div>
	);
};

export default MoviesList;
