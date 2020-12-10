import React from 'react';
import styled from 'styled-components';

const UserBox = ({ users, setCurrentUser }) => {
	const clickHandler = (name) => {
		const result = users.filter((user) => user.name === name);
		setCurrentUser(result[0]);
	};

	return (
		<UserStyle>
			{users.map((user) => {
				return (
					<UserContainer key={user.name} onClick={() => clickHandler(user.name)}>
						<img src={user.image} alt="userpic" />
						<p>{user.name}</p>
					</UserContainer>
				);
			})}
		</UserStyle>
	);
};

export default UserBox;

const UserStyle = styled.div`
	width: auto;
	position: fixed;
	background: white;
	top: 80px;
	right: 80px;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding-bottom: 10px;
`;
const UserContainer = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
`;
