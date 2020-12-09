import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import ProfileMenu from './ProfileMenu';
const Nav = ({ users, currentUser }) => {
	return (
		<NavStyle>
			<Menu />
			<ProfileMenu users={users} currentUser={currentUser} />
		</NavStyle>
	);
};

export default Nav;

const NavStyle = styled.div`
	display: flex;
	width: 100%;
	height: 50px;
	color: #626262;
	align-items: center;
	justify-content: space-between;
	border-bottom: solid 1px #d8d8d8;
	position: fixed;
	z-index: 10;
	background: white;
	top: 0;
`;
