import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
	//set up menu arrays
	// const linkTabs = ['Dashboard', 'Explore', 'Training', 'Challenges'];
	const pathway = useLocation();

	//<Link to="/skills">Skills{pathway.pathname === '/skills' ? <Line /> : <Linehidden />}</Link>
	return (
		<MenuStyle>
			<h2>STRIVE</h2>

			<Link to="/">
				Dashboard <FontAwesomeIcon icon={faAngleDown} />
				{pathway.pathname === '/' ? <Line /> : <Linehidden />}
			</Link>
			<Link to="/explore">
				Nutrition <FontAwesomeIcon icon={faAngleDown} />
				{pathway.pathname === '/explore' ? <Line /> : <Linehidden />}
			</Link>
			<Link to="/training">
				Training <FontAwesomeIcon icon={faAngleDown} />
				{pathway.pathname === '/training' ? <Line /> : <Linehidden />}
			</Link>
			<Link to="/challenges">
				Challenges <FontAwesomeIcon icon={faAngleDown} />
				{pathway.pathname === '/challenges' ? <Line /> : <Linehidden />}
			</Link>
		</MenuStyle>
	);
};

export default Menu;

const MenuStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 50%;
	padding-left: 3%;
	h2 {
		color: #fc5200;
		font-family: 'Changa', sans-serif;
		padding-right: 10px;
	}
	a {
		width: 100px;
		height: auto;
		padding-left: 10px;
		padding-bottom: 0;
		text-decoration: none;
		color: #555555;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: -15px;
	}
`;
const Line = styled.div`
	height: 2px;
	background-color: #fc5200;
	width: 100px;
	margin-top: 15px;
	margin-bottom: 0;
`;
const Linehidden = styled.div`
	height: 2px;
	width: 100px;
	opacity: 0;
	margin-top: 15px;
	margin-bottom: 0;
`;
