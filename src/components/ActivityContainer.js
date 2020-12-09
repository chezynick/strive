import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import Activity from './Activity';
const ActivityContainer = ({ activities, currentUser, things }) => {
	const [buttonText, setButtonText] = useState(true);
	const activeArr = activities;
	const clickHandler = () => {
		setButtonText(!buttonText);
	};

	return (
		<ActivityStyle>
			<button onClick={clickHandler}>
				{buttonText ? 'Following ' : 'Your Activities '} <FontAwesomeIcon icon={faAngleDown} />
			</button>

			{buttonText
				? activeArr.map((activity) => (
						<Activity activity={activity} key={activity.id} activities={activities} things={things} />
				  ))
				: activeArr
						.filter((a) => a.user === currentUser.name)
						.map((activity) => (
							<Activity activity={activity} key={activity.id} things={things} activities={activities} />
						))}
		</ActivityStyle>
	);
};

export default ActivityContainer;

const ActivityStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	margin-top: 3%;
	button {
		background: none;
		color: #555555;
		border: none;
		text-align: left;
		margin-left: 5%;
		font-size: large;
		width: 20%;
		outline: none;
		display: flex;
		justify-content: space-between;
		margin-bottom: 0;
	}
`;
