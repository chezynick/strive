import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';

const Upload = ({ currentUser, activities }) => {
	//get date function
	const today = new Date();
	const todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	//create state for new activity values
	const [activeDistance, setActiveDistance] = useState(0);
	const [activeTime, setActiveTime] = useState(0);
	const [activeLocation, setActiveLocation] = useState('');
	const [activeTitle, setActiveTitle] = useState('');
	const [activityType, setActivityType] = useState(true);
	const [activityImages, setActivityImages] = useState('');
	//change handlers for text boxes
	const titleHandler = (e) => {
		setActiveTitle(e.target.value);
	};
	const locationHandler = (e) => {
		setActiveLocation(e.target.value);
	};
	const timeHandler = (e) => {
		setActiveTime(Number(e.target.value));
	};
	const distanceHandler = (e) => {
		setActiveDistance(Number(e.target.value));
	};
	const imageHandler = (e) => {
		setActivityImages(e.target.value);
	};
	const History = useHistory();
	//main submit button
	const clickHandler = () => {
		if (activeDistance === '' || activeTime === '' || activeTitle === '') {
			console.log('not correct');
			let path = `/`;
			History.push(path);
		} else {
			firebase.firestore().collection('activities').add({
				user: currentUser.name,
				userImage: currentUser.image,
				likes: 0,
				time: activeTime,
				distance: activeDistance,
				title: activeTitle,
				date: todaysDate,
				location: activeLocation,
				comments: [],
				type: activityType,

				images: activityImages,
			});
			let path = `/`;
			History.push(path);
		}
	};
	return (
		<UploadStyle>
			<h1>Add Activity</h1>
			<form>
				<p>User Name : {currentUser.name}</p>
				<p>Activity Date : {todaysDate}</p>

				<h2>Activity Title</h2>
				<textarea onChange={titleHandler} cols="30" rows="1"></textarea>
				<h2>Distance in kilometres</h2>
				<textarea onChange={distanceHandler} type="number" cols="30" rows="1"></textarea>
				<h2>Where did your activity start?</h2>
				<textarea onChange={locationHandler} cols="30" rows="1"></textarea>
				<h2>How long did it take in minutes?</h2>
				<textarea onChange={timeHandler} cols="30" type="number" rows="1"></textarea>
				<h2>Add a photo</h2>
				<textarea onChange={imageHandler} cols="30" rows="1" pattern="/(https?:\/\/).*/g"></textarea>
				<h2>Type of Activity Run/Cycle</h2>

				<button type="radio" onClick={() => setActivityType(!activityType)}>
					{activityType ? 'Cycle' : 'Run'}
				</button>
			</form>
			<button onClick={clickHandler}>Upload</button>
		</UploadStyle>
	);
};

export default Upload;
const UploadStyle = styled.div`
	width: 80%;
	margin: 8% 10% 5% 10%;
	@media (max-width: 800px) {
		margin-top: 20%;
		margin-bottom: 20%;
	}
	@media (max-width: 800px) {
		margin-top: 25%;
	}
	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #555555;
		padding: 3% 10% 3% 10%;
		margin-bottom: 2%;
	}
	textarea {
		outline: none;
		border-radius: 0.5rem;
		text-align: center;
		font-family: 'MaisonNeue', 'Segoe UI', 'Helvetica Neue', -apple-system, system-ui, BlinkMacSystemFont, Roboto,
			Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		font-size: large;
	}
	fieldset {
		border-radius: 0.5rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
`;
