import React, { useState } from "react";
import "./styles.css";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coord: response.data.coordinates,
      temperature: response.data.temperature.current,
      tempmax: response.data.temperature.maximum,
      tempmin: response.data.temperature.minimum,

      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
      feelslike: response.data.temperature.feels_like,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "427d9bc33t60e242fa0db1e5a5dfoc5f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <form className="mb-2" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autocomplete="off"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <button type="submit" id="searchbutton">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast data={weatherData} coord={weatherData.coord} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
