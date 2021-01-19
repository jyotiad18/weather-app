import React, { useEffect } from 'react';
import './css/App.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from './axios.js';
import TempIndicator from './component/TempIndicator';
import DailyWeather from './component/DailyWeather';
import WeatherToday from './component/WeatherToday';
import Weather from './component/Weather';
import WeatherSearch from './component/WeatherSearch';
import Loader from './component/Loader';
import { selectComponent } from './reducers/componentSlice';
import { selectWeather, setweather} from './reducers/weatherSlice';
import { getWeatherPicture, DateFormater, UnitConverter } from './utilites/utils.js';

function App() {
  const dispatch = useDispatch();
  const { isSearchShow } = useSelector(selectComponent);
  const { weather, isCelcis, woeid } = useSelector(selectWeather);
  const { consolidated_weather } = weather || [];  

  useEffect(() => {
    function getWeatherData() {       
       const url = `location/${woeid}/`;
       axios.get( url ,{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((response) => {
            let data = response.data;
             dispatch(setweather({
              data: data
            }))
        });    
     }
    getWeatherData();  
  },[woeid, dispatch])
  

  return (
    <div className="app">
      {
        weather ?
          <>
          <div className="app__left"> 
            {!isSearchShow ? <Weather /> : <WeatherSearch /> }
          </div>
          <div className="app__main">
            <div className="main__tempIndicator">
              <TempIndicator title={'℃'} type={isCelcis ? "centrigrade" : "forenhight"} />
              <TempIndicator title={'℉'} type={!isCelcis ? "centrigrade": "forenhight"}/>
            </div>
            <div className="main__weatherInfo">
              <div className="weather__weeks">
                {
                  consolidated_weather && consolidated_weather.map(({ weather_state_abbr,
                    max_temp, min_temp, applicable_date}, i) => (
                    i > 0 ? 
                        <DailyWeather key={i} day={DateFormater(applicable_date)}
                          logo={getWeatherPicture(weather_state_abbr)}
                          maxTemp={UnitConverter(max_temp, !isCelcis)} minTemp={UnitConverter(min_temp, !isCelcis)} />
                    : null

                  ))
                }            
              </div>
              <div className="weather__today"> 
                <h1>Today’s Hightlights</h1> 
                <div className="today__detail">
                  <WeatherToday title={"Wind"} record={consolidated_weather[0].wind_speed.toFixed(1)} parameter={"mph"} direction={consolidated_weather[0].wind_direction_compass} iconName={"navigation"} />
                    <WeatherToday title={"Humidity"} record={consolidated_weather[0].humidity} parameter={"%"} isprogres={true}/>
                  <WeatherToday title={"Visibility"} record={consolidated_weather[0].visibility.toFixed(1)} parameter={"miles"}/>
                  <WeatherToday title={"Air Pressure"} record={consolidated_weather[0].air_pressure} parameter={"mb"}/>
                </div>
              </div>
            </div>
            <div className="main__footer">Jyoti ADHIAKRI @ DevChallenges.io</div>
            </div>
          </>
        : <Loader />
      }
    </div>
  );
}

export default App;
