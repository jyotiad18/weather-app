import React from 'react';
import '../css/WeatherToday.css';

function WeatherToday({ title, record, parameter, iconName, direction, isprogres }) {
	return (
		<div className="weatherToday">
			<h3>{title}</h3>
			<div className="weatherToday__record">
				<h3>{record}</h3>
				<h4>{parameter}</h4>
			</div>
			<div className="weatherToday__record">
				<i className="material-icons md-24">{iconName}</i>
				<h5>{direction}</h5>
			</div>
			{
				isprogres ?
					<div class="weather__progress">
						<div class="actual__humidity" style={{ width: `${record}%` }}>
						</div>
					</div> : null
			}
		</div>	
	)
}

export default WeatherToday;
