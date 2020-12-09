import React from 'react';
import styled from 'styled-components';
const Training = () => {
	const videoArr = [
		<iframe
			src="https://www.youtube.com/embed/YWzRE1BiAvw"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="1"
		></iframe>,
		<iframe
			src="https://www.youtube.com/embed/MKuZOwYukho"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="2"
		></iframe>,
		<iframe
			src="https://www.youtube.com/embed/Fgz7Ikf7ATk"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="3"
		></iframe>,
		<iframe
			src="https://www.youtube.com/embed/nzCMptGGZt8"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
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
`;
const VidBox = styled.div`
	width: 40%;
	height: auto;
	margin: 5%;
	height: auto;
`;
