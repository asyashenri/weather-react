import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <form id="cityForm">
      <input
        type="text"
        placeholder="Type a city..."
        id="textInput"
        autocomplete="off"
      />
      <button type="submit" id="searchbutton">
        Search
      </button>
      <button id="currentlocation">Current location</button>
    </form>
  );
}
