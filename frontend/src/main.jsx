import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";
import DashboardPage from "./pages/DashboardPage.jsx";
import FarmingSimulatorPage from "./pages/FarmingSimulatorPage.jsx";
import CropRecommendationPage from "./pages/CropRecommendationPage.jsx";
import PlantGrowthStagePage from "./pages/PlantGrowthStagePage.jsx";
import PlantDiseaseDetectionPage from "./pages/PlantDiseaseDetectionPage.jsx";
import CropYieldPredictionPage from "./pages/CropYieldPredictionPage.jsx";
import PestDetectionPage from "./pages/PestDetectionPage.jsx";
import FertilizersRecommendationPage from "./pages/FertilizersRecommendationPage.jsx";
import FarmingCalendar from "./pages/FarmingCalendar.jsx";
import CalendarApp from "./pages/FarmingCalendar.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path="/farming-simulator" element={<FarmingSimulatorPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route
          path="crop-recommendation"
          element={<CropRecommendationPage />}
        />
        <Route
          path="fertilizers-recommendation"
          element={<FertilizersRecommendationPage />}
        />
        <Route path="plant-growth-stage" element={<PlantGrowthStagePage />} />
        <Route
          path="crop-yield-prediction"
          element={<CropYieldPredictionPage />}
        />
        <Route
          path="plant-disease-detection"
          element={<PlantDiseaseDetectionPage />}
        />
        <Route path="pest-detection" element={<PestDetectionPage />} />
        <Route path="farming-calendar" element={<CalendarApp />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
