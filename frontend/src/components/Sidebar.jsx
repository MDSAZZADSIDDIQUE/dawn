import React from "react";

const Sidebar = () => {
  return (
    <ul className="menu bg-base-100 rounded-box w-96 min-h-screen">
      <li>
        <a>Item 1</a>
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
        <a href="/farming-calendar">Farming Calendar</a>
      </li>
      <li>
        <a href="/farming-simulator">Farming Simulator</a>
      </li>
    </ul>
  );
};

export default Sidebar;
