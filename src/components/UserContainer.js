import React from 'react';
import styled from 'styled-components';

const UserContainer = ({ users, setCurrentUser }) => {
	const clickHandler = (name) => {
		const result = users.filter((user) => user.name === name);
		setCurrentUser(result[0]);
	};

	return (
		<UserStyle>
			<h3>Atheletes</h3>
			{users.map((user) => (
				<AtheleteStyle onClick={() => clickHandler(user.name)} key={user.name}>
					<img src={user.image} alt="profile pic" />
					<div>
						<h4>{user.name}</h4>
						<h5>{user.location}</h5>
					</div>
				</AtheleteStyle>
			))}
		</UserStyle>
	);
};

export default UserContainer;

const UserStyle = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	padding-top: 10%;
	@media (max-width: 1000px) {
		display: none;
	}
`;
const AtheleteStyle = styled.div`
	display: flex;
	width: 80%;
	padding: 3% 10% 3% 10%;
	align-items: center;
	h4 {
		margin-bottom: 0;
		margin-top: 5%;
	}
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 20px;
	}
	h5 {
		color: #fc5200;
		margin: 0;
		padding: 0;
	}
	div {
		text-align: left;
	}
`;
