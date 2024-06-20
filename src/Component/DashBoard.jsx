import React, { useState } from 'react';
import axios from 'axios';

const DashBoard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee26ec43891666e8d4e8069a734cddff&units=metric`);
      setWeatherData(response.data);
      setCityName('');
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="cardName">
      <div className="card__content">
        <input
          type="text"
          placeholder="Enter city name"
          className='inp'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)} id='input12'
        />
        <button onClick={fetchData} className='buttonCheck'>Search</button>

        {weatherData && (
          <div className='justify-content-center fs-5'>
            <h2 style={{fontSize: '40px', marginLeft:"40px"}}>{weatherData.name}, {weatherData.sys.country}</h2>
            <div style={{marginLeft:"50px", fontSize:"20px"}}> {weatherData.weather[0].description}</div>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
              className='weather-icon'
            />
            <div>Temperature: {weatherData.main.temp}°C</div>
            <div>Humidity: {weatherData.main.humidity}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
