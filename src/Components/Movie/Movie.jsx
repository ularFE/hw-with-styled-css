import React from "react";
import style from './Movie.module.css'
import styled from 'styled-components'

const Movie = ({ data }) => {
	const DeleteButton = styled.button`
	background-color: red;
	width:50px;
	height:20px;
	`
	const UpdateButton = styled.button`
	background-color: blue;
	width:50px;
	height:20px;
	`
	return (
		<div className={style.allObjBox}>
			{data.map((item, index) => {
				return (
					<div key={index} className={style.movie_box}>
						<img src={item.img} alt={item.name} />
						<p className={style.movie_name}>{item.name}</p>
						<p className={style.movie_janr}>{item.janr}</p>
						<DeleteButton>delete</DeleteButton>
						<UpdateButton>update</UpdateButton>
					</div>
				);
			})}
		</div>
	);
};

export default Movie;
