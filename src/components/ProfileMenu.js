import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
const ProfileMenu = ({ currentUser }) => {
	return (
		<ProfileStyle>
			<button>Subscribe</button>
			<FontAwesomeIcon icon={faBell} />

			<div>
				<img src={currentUser.image} alt="profilepic" />
				<FontAwesomeIcon icon={faAngleDown} />
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
	width: 20%;
	justify-content: space-evenly;
	align-items: center;
	color: #626262;
	padding-right: 6%;
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
