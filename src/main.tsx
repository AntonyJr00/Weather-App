import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WeatherApp } from "./weather/pages/WeatherApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
