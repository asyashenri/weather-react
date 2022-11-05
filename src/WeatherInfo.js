import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1 id="city">{props.data.city}</h1>
        <h2 id="date">
          <FormattedDate date={props.data.date} />
        </h2>
        <h3>
          <div className="description">
            <div id="weatherId" className="text-capitalize">
              {props.data.description}
            </div>
            <div id="wind">Wind: {Math.round(props.data.wind)} km/h</div>
            <div id="humidity">Humidity: {props.data.humidity}%</div>
            <div id="feelsLike">
              Feels like: {Math.round(props.data.feelslike)}°C
            </div>
          </div>
        </h3>
      </div>

      <div className="col-6">
        <div className="clearfix">
          {props.data.iconUrl}
          <div className="float-start">
            <span id="temper" className="temper">
              {Math.round(props.data.temperature)}
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
