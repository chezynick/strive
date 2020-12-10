import { faBiking, faRunning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';

const DetailBox = ({ detailActivity, things, detailDisplay, setDetailDisplay }) => {
	return (
		<DetailStyle onClick={() => setDetailDisplay(!detailDisplay)}>
			<HeaderBox>
				<h1> {detailActivity[0].user} </h1>
				{detailActivity[0].type ? (
					<FontAwesomeIcon size="2x" icon={faBiking} />
				) : (
					<FontAwesomeIcon size="2x" icon={faRunning} />
				)}
			</HeaderBox>
			<MainBox>
				<ProfileBox>
					<img src={detailActivity[0].userImage} alt="" />
					<h1>{detailActivity[0].title}</h1>
				</ProfileBox>
				<StatContainer>
					<StatBox>
						<h3>{detailActivity[0].distance}Km</h3>
						<h3>{detailActivity[0].time}</h3>
						<h3>{(detailActivity[0].time / detailActivity[0].distance).toFixed(2)}/km</h3>
						<h3>{detailActivity[0].elevation !== '' ? detailActivity[0].elevation : 'N/A'}m</h3>
						<p>Distance</p>
						<p>Duration</p>
						<p>Pace</p>
						<p>Elevation</p>
					</StatBox>
					<Weather city={detailActivity[0].location} things={things} />
				</StatContainer>
				<img src={detailActivity[0].images} alt="userpic" />
			</MainBox>
		</DetailStyle>
	);
};

export default DetailBox;
const DetailStyle = styled.div`
	width: 100%;
	position: fixed;
	overflow: scroll;
	z-index: 20;
	height: 100%;
	background-color: white;
	top: 80px;
	left: 0;
	h1 {
		padding-left: 5%;
	}
`;
const HeaderBox = styled.div`
	width: 80%;
	margin: 5% 10% 0% 10%;
	height: 50px;
	background-color: #eeeeee;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border: 1px lightgray solid;
	@media (max-width: 1000px) {
		height: auto;
	}
`;
const MainBox = styled.div`
	width: 80%;
	height: auto;
	background: white;
	border: 1px lightgray solid;
	margin-left: 10%;
	margin-bottom: 5%;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1000px) {
		flex-direction: column;
		justify-content: center;
		margin-bottom: 10%;
		padding-bottom: 10%;
	}
`;

const ProfileBox = styled.div`
	width: 50%;
	height: 200px;
	padding: 0;
	border-bottom: 1px lightgray solid;
	border-right: 1px lightgray solid;
	display: flex;
	@media (max-width: 1000px) {
		width: 100%;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: large;
			text-align: center;
		}
		img {
			width: 30px;
			height: 30px;
		}
	}
	img {
		width: 10vh;
		height: 10vh;
		border-radius: 50%;
		margin-top: 5%;
	}
`;
const StatBox = styled.div`
	width: 100%;

	height: 100px;

	display: grid;
	align-items: center;
	justify-content: center;
	text-align: center;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 2fr 1fr;
`;
const StatContainer = styled.div`
	width: 49%;
	height: 200px;
	border-bottom: 1px lightgray solid;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;
