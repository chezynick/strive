import React from 'react';
import styled from 'styled-components';
const Training = () => {
	const videoArr = [
		<iframe
			src="https://www.youtube.com/embed/YWzRE1BiAvw"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			title="1"
		></iframe>,
		<iframe
			src="https://www.youtube.com/embed/MKuZOwYukho"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			title="2"
		></iframe>,
		<iframe
			src="https://www.youtube.com/embed/Fgz7Ikf7ATk"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			title="3"
		></iframe>,
		<iframe
			src="https://www.youtube.com/embed/nzCMptGGZt8"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			title="4"
		></iframe>,
	];
	return (
		<TrainStyle>
			{videoArr.map((vid) => (
				<VidBox key={vid.title}>{vid}</VidBox>
			))}
		</TrainStyle>
	);
};

export default Training;
const TrainStyle = styled.div`
	margin-top: 5%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 800px) {
		flex-direction: column;
	}
`;
const VidBox = styled.div`
	width: 40%;
	height: auto;
	margin: 5%;
	height: auto;
	@media (max-width: 800px) {
		width: 80%;
		margin-top: 20%;
		margin: 10%;
	}
	@media (max-width: 500px) {
		margin-top: 25%;
	}
`;
