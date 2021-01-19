import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Weather.css';
import { toggleclose } from '../reducers/componentSlice';
import { selectWeather } from '../reducers/weatherSlice';
import { getWeatherPicture, DateFormater, UnitConverter } from '../utilites/utils.js';

function Weather() {
	const dispatch = useDispatch();
	const { weather, isCelcis } = useSelector(selectWeather);
	const { weather_state_abbr, weather_state_name, applicable_date, max_temp } = weather.consolidated_weather[0];

	const onToggleComponent = () => {
		dispatch(toggleclose());
	}
	return (
		<div className="weather">
			<div className="weather__search">
				<span onClick={onToggleComponent}>weather search</span>
				<i className="material-icons md-24 round">gps_fixed</i>				
			</div>
			<div className="weather__picture">
				<img src={getWeatherPicture(weather_state_abbr)} alt=""/>
			</div>

			<div className="weather__tempature">				
				<h3>{UnitConverter(max_temp, !isCelcis)}</h3>{isCelcis ? <span>℃</span> : <span>℉</span>}			
			</div>

			<div className="weather__condition">				
				<span>{weather_state_name}</span>				
			</div>

			<div className="weather__date">				
				<span>Today</span>
				<span>.</span>
				<span>{DateFormater(applicable_date)}</span>
			</div>

			<div className="weather__location">
				<i className="material-icons md-24 round">location_on</i>
				<span>{weather.title}</span>
			</div>
			
		</div>
	)
}

export default Weather;
