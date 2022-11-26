import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zurich" />

        <footer class="code">
          <a
            href="https://github.com/asyashenri/weather-project-shecodes/tree/main"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open-source code
          </a>{" "}
          {""}
          by Asya Shenri
        </footer>
      </div>
    </div>
  );
}
