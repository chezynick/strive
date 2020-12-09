import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudSun, faCloudRain } from '@fortawesome/free-solid-svg-icons';

const Weather = ({ city, things }) => {
	const [currentTemp, setCurrentTemp] = useState(0);
	const [clouds, setClouds] = useState(50);
	const [currentWind, setCurrentWind] = useState(0);
	const [weatherImage, setWeatherImage] = useState(faCloudRain);
	const key = things[1].key;
	const cityWeather = async (city) => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=metric&APPID=` + key
			);
			const weather = await response.json();
			console.log(weather);
			setCurrentTemp(weather.main.temp.toFixed(0));
			setCurrentWind(weather.wind.speed.toFixed(0));
			setClouds(weather.clouds.all);
		} catch (err) {
			console.log(err, 'not worked this');
		}
	};
	useEffect(() => {
		cityWeather(city);
	}, []);
	useEffect(() => {
		const images = () => {
			//change the weather icon depending on weather

			if (clouds > 70) {
				setWeatherImage(faCloudRain);
			} else if (clouds > 70) {
				setWeatherImage(faCloud);
			} else if (clouds > 30 && clouds < 70) {
				setWeatherImage(faCloudSun);
			} else if (clouds <= 30) {
				setWeatherImage(faSun);
			} else {
				setWeatherImage(faCloud);
			}
		};
		images();
	}, [clouds]);
	return (
		<WeatherBox>
			<FontAwesomeIcon size="2x" icon={weatherImage} />
			<h3>Temp: {currentTemp}C</h3>
			<h3>Wind: {currentWind}mph</h3>
		</WeatherBox>
	);
};

export default Weather;
const WeatherBox = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;
