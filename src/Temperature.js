import React from "react";
import "./styles.css";

export default function Temperature(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1 id="city">{props.data.city}</h1>
        <h2 id="date">
          Sun, Sep 25
          <br />
          18:57
        </h2>
        <h3>
          <div className="description">
            <div id="weatherId" className="text-capitalize">
              {props.data.description}
            </div>
            <div id="wind">Wind: {props.data.wind} km/h</div>
            <div id="humidity">Humidity:{props.data.humidity}%</div>
            <div id="feelsLike">Feels like: {props.data.feelslike}°C</div>
          </div>
        </h3>
      </div>

      <div className="col-6">
        <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt=""
            width="140"
            class="float-start"
            id="icon"
          />
          <div className="float-start">
            <span id="temper" className="temper">
              {props.data.temperature}
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
  );
}
