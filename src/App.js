import "./styles.css";
import Form from "./Form";

import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Form />

            <Temperature />
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
}
