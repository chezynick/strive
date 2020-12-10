import React from 'react';
import styled from 'styled-components';
import ProfileSection from './ProfileSection';

const Challenges = ({ currentUser, activities }) => {
	return (
		<ChallengeStyle>
			<ProfileSection currentUser={currentUser} activities={activities} />
		</ChallengeStyle>
	);
};

export default Challenges;

const ChallengeStyle = styled.div`
	margin-top: 10%;
	@media (max-width: 800px) {
		margin-top: 15%;
	}
`;
