import { useState } from "react";
import styled from 'styled-components'
import Movie from "../Movie/Movie";
import styles from './MovieButton.module.css'

const movieData = [
	{
		name: "Аватар",
		janr: "Фантастика",
		img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg",
	},
	{
		name: "Шрек",
		janr: "Мультфильм",
		img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Shrek.jpg/640px-Shrek.jpg",
	},
	{
		name: "После",
		janr: "Романтика",
		img: "https://upload.wikimedia.org/wikipedia/ru/4/4c/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5.%D0%9D%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg",
	},
	{
		name: "Каникулы",
		janr: "Комедия",
		img: "https://pics.livejournal.com/tema/pic/000y75fb",
	},
	{
		name: "Монстр",
		janr: "Мультфильм",
		img: "https://s3.afisha.ru/mediastorage/58/d6/c6c977f689e24891b5980fc5d658.jpg",
	},
	{
		name: "Три метра",
		janr: "Романтика",
		img: "https://upload.wikimedia.org/wikipedia/ru/b/b1/%D0%A2%D1%80%D0%B8_%D0%BC%D0%B5%D1%82%D1%80%D0%B0_%D0%BD%D0%B0%D0%B4_%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B5%D0%BC_%D0%BD%D0%B5%D0%B1%D0%B0_%28_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_2010%29.jpg",
	},
	{
		name: "Марвел",
		janr: "Фантастика",
		img: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg",
	},
];

const MovieButtons = () => {
	const [result1, setResult1] = useState(movieData);
	const [result, setResult] = useState("");
	function getCards(result1) {
		const res = movieData.filter((item) => item.janr === result1);
		setResult1(res);
	}
	function resGet(e) {
		setResult(e.target.innerText);
		getCards(e.target.innerText);
	}

	function showAllCards() {
		setResult1(movieData);
	}

	const FilterButton = styled.button`
	width: 100px;
	height: 40px;
	background-color: greenyellow;
	`
	const ShowAllButton = styled.button`
	width: 100px;
	height: 40px;
	background-color: purple;
	`

	return (
		<div className={styles.allButtonJ}>
			<div className={styles.buttonsJ}>

				<FilterButton onClick={resGet}>Фантастика</FilterButton>
				<FilterButton onClick={resGet}>Романтика</FilterButton>
				<FilterButton onClick={resGet}>Мультфильм</FilterButton>
				<FilterButton onClick={resGet}>Комедия</FilterButton>
				<ShowAllButton onClick={showAllCards}>Все</ShowAllButton>
			</div>
			<div>
				<Movie start={result} data={result1} />
			</div>
		</div>
	);
};

export default MovieButtons;
