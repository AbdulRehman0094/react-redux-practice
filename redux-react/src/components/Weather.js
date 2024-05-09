import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../redux/index';

const WeatherDisplay = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.data);
  const loading = useSelector(state => state.weather.loading);
  const error = useSelector(state => state.weather.error);

  useEffect(() => {
    // Dispatch the action creator to fetch weather data when the component mounts
    dispatch(actionCreators.fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <h2>Weather Information</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
