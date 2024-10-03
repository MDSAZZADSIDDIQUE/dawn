import React from "react";

const Sidebar = () => {
  return (
    <ul className="menu bg-base-100 rounded-box w-96 min-h-screen">
      <li>
        <a href="dashboard">Dashboard</a>
      </li>
      <li>
        <details open>
          <summary>Farming Monitoring</summary>
          <ul>
            <li>
              <a href="soil-moisture-monitoring">Soil Moisture Monitoring</a>
            </li>
            <li>
              <a href="air-temperature-and-humidity-monitoring">
                Air Temperature and Humidity Monitoring
              </a>
            </li>
            <li>
              <a href="soil-temperature-monitoring">
                Soil Temperature Monitoring
              </a>
            </li>
            <li>
              <a href="soil-ph-and-water-ph-monitoring">
                Soil pH and Water pH Monitoring
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary>Farming Assistant</summary>
          <ul>
            <li>
              <a href="crop-recommendation">Crop Recommendation</a>
            </li>
            <li>
              <a href="fertilizers-recommendation">Fertilizer Recommendation</a>
            </li>
            <li>
              <a href="plant-growth-stage">Plant Growth Stage</a>
            </li>
            <li>
              <a href="crop-yield-prediction">Crop Yeild Prediction</a>
            </li>
            <li>
              <a href="plant-disease-detection">Plant Disease Detection</a>
            </li>
            <li>
              <a href="pest-detection">Pest Detection</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a href="/farming-scheduler-creation-form">Farming Calendar</a>
      </li>
      <li>
        <a href="/farming-simulator-creation-form">Farming Simulator</a>
      </li>
    </ul>
  );
};

export default Sidebar;
