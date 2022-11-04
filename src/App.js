import React, { useState } from "react";
import "./styles.css";

import axios from "axios";
import Temperature from "./Temperature";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coorditates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
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
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form id="cityForm" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Type a city..."
                  id="textInput"
                  autocomplete="off"
                  onChange={handleCityChange}
                />
                <button type="submit" id="searchbutton">
                  Search
                </button>
                <button id="currentlocation">Current location</button>
              </form>

              <Temperature data={weatherData} />
            </div>
          </div>

          <footer class="code">
            <a
              href="https://github.com/asyashenri/weather-project-shecodes/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            {""}
            by Asya Shenri
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
