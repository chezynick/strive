import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//import photos and icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faRunning } from '@fortawesome/free-solid-svg-icons';

const ProfileSection = ({ currentUser, activities }) => {
	const [totalActive, setTotalActive] = useState([]);
	const [totalDistance, setTotalDistance] = useState(0);

	useEffect(() => {
		const result = activities.filter((activity) => activity.user === currentUser.name);
		setTotalActive(result);
		//create array to determine current users total distance covered
		const resultArr = Array.from(result);
		//if returns only 1 object
		if (resultArr.length === 1) {
			const atheleteDistance = resultArr[0].distance;
			setTotalDistance(atheleteDistance);
			//returns array of more than 1
		} else if (resultArr.length === 0) {
			return totalDistance;
		} else if (resultArr.length > 1) {
			const atheleteDistance = resultArr.reduce((cum, next) => cum.distance + next.distance);
			setTotalDistance(atheleteDistance);
		}
	}, [currentUser]);

	return (
		<ProfileStyle>
			<ProfileOverview>
				<img src={currentUser.image} alt="userpic" />
				<h3>{currentUser.name}</h3>
				<InfoBox>
					<p>Following</p>
					<p>Followers</p>
					<p>Activities</p>
					<h5>{currentUser.followers}</h5>
					<h5>{currentUser.following}</h5>
					<h5>{totalActive.length}</h5>
				</InfoBox>
			</ProfileOverview>
			<ProfileOverview>
				<IconHolder>
					<FontAwesomeIcon color="#888888" size="2x" icon={faBiking} />
					<FontAwesomeIcon color="#888888" size="2x" icon={faRunning} />
				</IconHolder>
				<h4>Total Distance</h4>
				<h2>{totalDistance}</h2>
			</ProfileOverview>
		</ProfileStyle>
	);
};

export default ProfileSection;

const ProfileStyle = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10%;
	margin-top: 15%;
	@media (max-width: 800px) {
		margin-top: 20%;
		margin-bottom: 20%;
	}
	@media (max-width: 600px) {
		margin-top: 25%;
		margin-bottom: 25%;
	}
`;
const ProfileOverview = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: white;
	height: auto;
	margin-top: 40px;
	border-radius: 0.5rem;

	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin-top: -40px;
	}
	h2 {
		color: #8ce98c;
	}
	h4 {
		color: #888888;
		font-weight: 400;
	}
`;
const InfoBox = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	h5 {
		padding: 0;
		margin-top: 0;
	}
`;
const IconHolder = styled.div`
	display: flex;
	width: 100%;
	height: auto;
	margin: 0;
	padding: 5%;
	background: #f0efef;
	justify-content: space-evenly;
`;
