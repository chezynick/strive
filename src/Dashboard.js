import React from 'react';
import styled from 'styled-components';

// import components
import ProfileSection from './components/ProfileSection';
import ActivityContainer from './components/ActivityContainer';
import UserContainer from './components/UserContainer';

const Dashboard = ({ activities, users, currentUser, setCurrentUser, things }) => {
	return (
		<DashboardStyle>
			<ProfileSection currentUser={currentUser} activities={activities} users={users} />
			<ActivityContainer activities={activities} currentUser={currentUser} things={things} />
			<UserContainer users={users} setCurrentUser={setCurrentUser} currentUser={currentUser} />
		</DashboardStyle>
	);
};

export default Dashboard;

const DashboardStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	background: #f0efef;
	width: 100%;
	height: auto;
	margin-top: 50px;
	@media (max-width: 1000px) {
		grid-template-columns: 2fr 3fr;
	}
	@media (max-width: 800px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;
