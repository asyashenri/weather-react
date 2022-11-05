import React, { useState } from "react";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      feelslike: response.data.temperature.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form id="cityForm">
                <input
                  type="search"
                  placeholder="Type a city..."
                  id="textInput"
                  autocomplete="off"
                />
                <button type="submit" id="searchbutton">
                  Search
                </button>
                <button id="currentlocation">Current location</button>
              </form>

              <div className="row">
                <div className="col-6">
                  <h1 id="city">{weatherData.city}</h1>
                  <h2 id="date">
                    <FormattedDate date={weatherData.date} />
                  </h2>
                  <h3>
                    <div className="description">
                      <div id="weatherId" className="text-capitalize">
                        {weatherData.description}
                      </div>
                      <div id="wind">
                        Wind: {Math.round(weatherData.wind)} km/h
                      </div>
                      <div id="humidity">Humidity: {weatherData.humidity}%</div>
                      <div id="feelsLike">
                        Feels like: {Math.round(weatherData.feelslike)}°C
                      </div>
                    </div>
                  </h3>
                </div>

                <div className="col-6">
                  <div className="clearfix">
                    {weatherData.icon}
                    <div className="float-start">
                      <span id="temper" className="temper">
                        {Math.round(weatherData.temperature)}
                      </span>
                      <span className="hight">
                        <a href id="celcius">
                          °C
                        </a>
                        |
                        <a href id="fahrenheit">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
    const apiKey = "427d9bc33t60e242fa0db1e5a5dfoc5f";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
