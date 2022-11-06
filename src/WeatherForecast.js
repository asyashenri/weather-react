import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="WeatherForecast-day">Thu</div>
        <img src={props.data.iconUrl} alt={props.data.icon} width={60} />
        <div className="WeatherForecast-temp">
          <span className="temp-max">19</span>
          <span className="temp-min">10</span>
        </div>
      </div>
    </div>
  );
}
