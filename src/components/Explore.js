import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Explore = ({ things }) => {
	const [dataReturned, setDataReturned] = useState(false);
	const [data, setData] = useState();
	const key = things[0].key;
	const recipeData = async () => {
		try {
			const response = await fetch(
				'https://api.spoonacular.com/recipes/random?number=10&tags=vegan/information&apiKey=' +
					key +
					'&includeNutrition=false.'
			);
			const Data = await response.json();
			setData(...[Data]);
			console.log(Data);
			setDataReturned(true);
			return data;
		} catch (err) {
			console.log(err, 'not worked this');
		}
	};
	useEffect(() => {
		recipeData();
	}, []);
	if (dataReturned === true) {
		return (
			<ExploreStyle>
				{data.recipes.map((recipe) => (
					<RecipeBox>
						<a href={recipe.sourceUrl}>
							<img src={recipe.image} alt="foodpic" />
							<h3>{recipe.title}</h3>
						</a>
					</RecipeBox>
				))}
			</ExploreStyle>
		);
	} else {
		return <ExploreStyle></ExploreStyle>;
	}
};
export default Explore;
const ExploreStyle = styled.div`
	margin-top: 5%;
	width: 80%;
	height: auto;
	margin-left: 10%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	@media (max-width: 800px) {
		flex-direction: column;
		margin-top: 15%;
		margin-bottom: 15%;
	}
	@media (max-width: 500px) {
		flex-direction: column;
		margin-top: 23%;
		margin-bottom: 20%;
	}
`;
const RecipeBox = styled.div`
	width: 30%;
	height: auto;
	box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 5%;
	@media (max-width: 800px) {
		width: 80%;
	}
	a {
		text-decoration: none;
		color: #555555;
	}
	h3 {
		text-decoration: none;
	}
	img {
		width: 100%;
		height: auto;
	}
`;
