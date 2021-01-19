import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/WeatherSearch.css';
import { selectWeather, searchcity, setwoeid, setweather } from '../reducers/weatherSlice';
import { toggleclose } from '../reducers/componentSlice';

function WeatherSearch() {
	const { locations } = useSelector(selectWeather);	
	const [city, setCity] = useState("");
	const dispatch = useDispatch();
	
	const onSearchHandler = () => {			
		dispatch(searchcity({
			city: city
		}));
		setCity("");
	}

	const onCloseHandler = () => {
		dispatch(toggleclose());
	}

	const onClickHandler = (woeid) => {	
		dispatch(setweather({data: null}))
		dispatch(setwoeid({ woeid: woeid }));
		dispatch(toggleclose());
	}
	
	return (
		<div className="weatherSearch">
			<div className="weatherSearch__close">
				<i className="material-icons md-24" onClick={onCloseHandler}>close</i>
			</div>
			<div className="weatherSearch__inputs">
				<div className="inputs__details">
					<i className="material-icons md-24">search</i>
					<input type="text" placeholder="search location"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</div>	
				<button className="button__search" onClick = {onSearchHandler}>Search</button>
			</div>
			<div className="weatherSearch__list">
				{
					locations && locations.map((location, i) => (
						<div className="location__detail" key={i} onClick={() => { onClickHandler(location.woeid) }}>
							<span>{location.title}</span>
							<i className="material-icons md-24">keyboard_arrow_right</i>
						</div>
					))			
				}
			</div>
		</div>
	)
}

export default WeatherSearch;