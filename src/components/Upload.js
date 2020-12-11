import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';

const Upload = ({ currentUser }) => {
	//get date function
	const today = new Date();
	const todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	//create state for new activity values
	const [activeDistance, setActiveDistance] = useState('');
	const [activeTime, setActiveTime] = useState('');
	const [activeElevation, setActiveElevation] = useState('');
	const [activeTitle, setActiveTitle] = useState('');
	const [activityType, setActivityType] = useState(true);
	const [activityImages, setActivityImages] = useState('');
	//error message state
	const [errors, setErrors] = useState({
		titleError: '',
		timeError: '',
		elevationError: '',
		distanceError: '',
		imageError: '',
	});
	//change handlers for text boxes
	const titleHandler = (e) => {
		if (e.target.value.length < 5 || e.target.value.length > 40) {
			setErrors({
				titleError: 'Titles needs to be between 5 and 40 characters',
			});
		} else {
			setErrors({
				titleError: '',
			});
			setActiveTitle(e.target.value);
		}
	};
	const elevationHandler = (e) => {
		if (isNaN(e.target.value) && e.target.value.length > 0) {
			setErrors({
				elevationError: 'Only numbers are permitted',
			});
		} else {
			setErrors({
				elevationError: '',
			});
			setActiveElevation(e.target.value);
		}
	};
	const timeHandler = (e) => {
		if (isNaN(e.target.value) && e.target.value.length > 0) {
			setErrors({
				timeError: 'Only numbers between 1 and 999 are permitted',
			});
		} else {
			setErrors({
				timeError: '',
			});
			setActiveTime(e.target.value);
		}
	};
	const distanceHandler = (e) => {
		if (isNaN(e.target.value) && e.target.value.length > 0) {
			setErrors({
				distanceError: 'Only numbers between 1 and 999 are permitted',
			});
		} else {
			setErrors({
				distanceError: '',
			});
			setActiveDistance(e.target.value);
		}
	};
	const imageHandler = (e) => {
		if (e.target.value.length < 10) {
			setErrors({
				imageError: 'only URL address of image permitted',
			});
		} else {
			setErrors({
				imageError: '',
			});
			setActivityImages(e.target.value);
		}
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
				location: currentUser.location,
				comments: [],
				elevation: activeElevation,
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
				<h5>User Name : {currentUser.name}</h5>
				<h5>Activity Date : {todaysDate}</h5>
				<h2>Activity Title</h2>
				<textarea onChange={titleHandler} cols="30" rows="1"></textarea>
				<p></p> <p>{errors.titleError}</p>
				<h2>Distance in kilometres</h2>
				<textarea onChange={distanceHandler} type="number" cols="10" rows="1"></textarea>
				<p></p> <p>{errors.distanceError}</p>
				<h2>What was your elevation gain?</h2>
				<textarea onChange={elevationHandler} cols="10" rows="1"></textarea>
				<p></p> <p>{errors.elevationError}</p>
				<h2>How long did it take in minutes?</h2>
				<textarea onChange={timeHandler} cols="10" type="number" rows="1"></textarea>
				<p></p> <p>{errors.timeError}</p>
				<h2>Add a photo</h2>
				<textarea onChange={imageHandler} cols="30" rows="1" pattern="/(https?:\/\/).*/g"></textarea>
				<p></p> <p>{errors.imageError}</p>
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
		grid-template-rows: repeat(12, 1fr);
		justify-content: space-between;
		align-items: center;
		border: 1px solid #555555;
		padding: 3% 3% 3% 3%;
		margin-bottom: 2%;
		p {
			color: red;
		}
		@media (max-width: 600px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
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
