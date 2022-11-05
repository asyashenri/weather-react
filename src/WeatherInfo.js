import React from "react";
import FormattedDate from "./FormattedDate";
import "./styles.css";
import WeatherTemp from "./WeatherTemp";
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
          <img
            src={props.data.iconUrl}
            alt={props.data.icon}
            className="float-start"
            width={150}
          />
          <div className="float-start">
            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
