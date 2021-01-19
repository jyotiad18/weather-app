import React from 'react';
import '../css/DailyWeather.css';
import { useSelector } from 'react-redux';
import { selectWeather } from '../reducers/weatherSlice';

function DailyWeather({ day, logo, maxTemp, minTemp }) {
	const { isCelcis } = useSelector(selectWeather);

	return (
		<div className="dailyWeather">
			<h3>{day}</h3>
			<div className="dailyWeather__picture">
				<img src={logo} alt= "" />
			</div>			
			<div className="dailyWeather__temp">
				<div className="temp__detail">
					<h3>{maxTemp}</h3>{isCelcis ? <span>℃</span> : <span>℉</span>}
				</div>
				<div className="temp__detail">
					<h4>{minTemp}</h4>{isCelcis ? <span>℃</span> : <span>℉</span> }
				</div>				
			</div>
		</div>
	)
}

export default DailyWeather;
