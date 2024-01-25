import { useState } from "react";
import styles from './NewMovie.module.css';
import styled from 'styled-components'

const NewMovie = ({ movies, setMovies }) => {
	const [movieName, setMovieName] = useState("");
	const [movieImg, setMovieImg] = useState("");
	const [movieJanr, setMovieJanr] = useState("");

	const handleAddMovie = () => {
		const newMovieObj = {
			name: movieName,
			img: movieImg,
			janr: movieJanr,
		};
		console.log(movies);
		console.log(newMovieObj);
		setMovies([...movies, newMovieObj]);
		setMovieName("");
		setMovieImg("");
		setMovieJanr("");
	};

	const AddMovieButton = styled.button`
	  width:80px;
		height:30px;
    background-color: yellow;
	`
	const DeleteMovieButton = styled.button`
	  width:80px;
		height:30px;
    background-color: red;
	`

	const Input = styled.input`
	width:200px;
	height:30px;
	`

	return (
		<form
			className={styles.inputes_div}
			onSubmit={(event) => {
				event.preventDefault();
			
			}}>

    <Input placeholder="movie name" type="text" value={movieName} onChange={setMovieName}/>
    <Input placeholder="movie img" type="url" value={movieImg} onChange={setMovieImg}/>
    <Input placeholder="movie janr" type="text" value={movieJanr} onChange={setMovieJanr}/>

			<div className={styles.buttons}>
				<AddMovieButton onClick={handleAddMovie}>Add</AddMovieButton>
				<DeleteMovieButton>Delete</DeleteMovieButton>
			</div>
		</form>
	);
};

export default NewMovie;
