import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import UserBox from './UserBox';
const ProfileMenu = ({ currentUser, users, setCurrentUser }) => {
	const [display, setDisplay] = useState(false);
	const clickHandler = () => {
		setDisplay(!display);
	};
	return (
		<ProfileStyle>
			<button>Subscribe</button>
			<h2>STRIVE</h2>
			<FontAwesomeIcon icon={faBell} />

			<div onClick={clickHandler}>
				<img src={currentUser.image} alt="profilepic" />
				<FontAwesomeIcon icon={faAngleDown} />
				{display === true ? <UserBox users={users} setCurrentUser={setCurrentUser} /> : ''}
			</div>
			<Link to="/upload">
				<FontAwesomeIcon color="#fc5200" size="2x" icon={faPlusCircle} />
			</Link>
		</ProfileStyle>
	);
};

export default ProfileMenu;

const ProfileStyle = styled.div`
	display: flex;
	height: auto;
	width: 30%;
	justify-content: space-evenly;
	align-items: center;
	color: #626262;
	padding-right: 6%;
	background-color: white;
	@media (max-width: 1000px) {
		padding-right: 2%;
	}
	h2 {
		display: none;
		color: #fc5200;
		font-family: 'Changa', sans-serif;
	}
	@media (max-width: 800px) {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		flex-direction: row;
		border-bottom: solid 1px #d8d8d8;
		align-items: center;
		button {
			display: none;
		}
		h2 {
			display: inline-flex;
		}
	}
	div {
		display: flex;
		align-items: center;
	}

	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		padding-right: 5px;
	}
`;
