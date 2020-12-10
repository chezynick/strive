import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faClipboardList, faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const Footer = () => {
	const pathway = useLocation();
	return (
		<FootStyle>
			<Link to="/">
				{pathway.pathname === '/' ? (
					<FontAwesomeIcon color="#fc5200" size="2x" icon={faHome} />
				) : (
					<FontAwesomeIcon color="#555555" size="2x" icon={faHome} />
				)}

				<p>Home</p>
			</Link>
			<Link to="/explore">
				{pathway.pathname === '/explore' ? (
					<FontAwesomeIcon color="#fc5200" size="2x" icon={faAppleAlt} />
				) : (
					<FontAwesomeIcon color="#555555" size="2x" icon={faAppleAlt} />
				)}
				<p>Nutrition</p>
			</Link>
			<Link to="/challenges">
				{pathway.pathname === '/challenges' ? (
					<FontAwesomeIcon color="#fc5200" size="2x" icon={faUserAlt} />
				) : (
					<FontAwesomeIcon color="#555555" size="2x" icon={faUserAlt} />
				)}
				<p>Profile</p>
			</Link>
			<Link to="/training">
				{pathway.pathname === '/training' ? (
					<FontAwesomeIcon color="#fc5200" size="2x" icon={faClipboardList} />
				) : (
					<FontAwesomeIcon color="#555555" size="2x" icon={faClipboardList} />
				)}
				<p>Training</p>
			</Link>
		</FootStyle>
	);
};

export default Footer;

const FootStyle = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: auto;
	background-color: white;
	border-top: 1px #d8d8d8 solid;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media (min-width: 800px) {
		display: none;
	}
	a {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		text-decoration: none;
		justify-content: center;
		align-items: center;
		color: #555555;
		p {
			font-size: small;
		}
	}
`;
