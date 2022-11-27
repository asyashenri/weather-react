import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecastDay-info">
        <div>{day()}</div>
        <img
          src={props.data.condition.icon_url}
          width="42"
          alt={props.data.condition.description}
        />
        <div className="WeatherForecastDay-temperatures">
          <span className="WeatherForecastDay-temp-max">{maxTemp()}</span>{" "}
          <span className="WeatherForecastDay-temp-min">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
