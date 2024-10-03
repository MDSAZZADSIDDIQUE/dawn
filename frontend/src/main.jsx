import { registerLicense } from "@syncfusion/ej2-base";
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
import AnamolyDetection from "./pages/anomaly-detection/anomaly-detection.jsx";
import CropRecommendationPage from "./pages/CropRecommendationPage.jsx";
import CropYieldPredictionPage from "./pages/CropYieldPredictionPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import CalendarApp from "./pages/FarmingCalendarPage.jsx";
import FarmingSchedulerCreationForm from "./pages/FarmingSchedulerCreationForm.jsx";
import FarmingSimulatorPage from "./pages/FarmingSimulatorPage.jsx";
import FarmSimulatorCreatorForm from "./pages/FarmSimulatorCreatorForm.jsx";
import FertilizersRecommendationPage from "./pages/FertilizersRecommendationPage.jsx";
import NDVI from "./pages/NDVI.jsx";
import PestDetectionPage from "./pages/PestDetectionPage.jsx";
import PlantDiseaseDetectionPage from "./pages/PlantDiseaseDetectionPage.jsx";
import PlantGrowthStagePage from "./pages/PlantGrowthStagePage.jsx";
import SoilMoistureMonitoringPage from "./pages/SoilMoistureMonitoringPage.jsx";
import AirTemperatureAndHumidityMonitoringPage from "./pages/AirTemperatureAndHumidityMonitoringPage.jsx";
import SoilTemperatureMonitoring from "./pages/SoilTemperatureMonitoring.jsx";
import SoilPHAndWaterPHMonitoringPage from "./pages/SoilPHAndWaterPHMonitoringPage.jsx";
import ExoplanetExplorationPage from "./pages/ExoplanetExplorationPage.jsx";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWGJCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH9ecnRSQmNcV01zX0A="
);
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
        <Route
          path="farming-scheduler-creation-form"
          element={<FarmingSchedulerCreationForm />}
        />
        <Route
          path="farming-simulator-creation-form"
          element={<FarmSimulatorCreatorForm />}
        />
        <Route
          path="soil-moisture-monitoring"
          element={<SoilMoistureMonitoringPage />}
        />
        <Route
          path="air-temperature-and-humidity-monitoring"
          element={<AirTemperatureAndHumidityMonitoringPage />}
        />
        <Route
          path="soil-temperature-monitoring"
          element={<SoilTemperatureMonitoring />}
        />
        <Route
          path="soil-ph-and-water-ph-monitoring"
          element={<SoilPHAndWaterPHMonitoringPage />}
        />
      </Route>
      <Route path="yo" element={<AnamolyDetection />} />
      <Route
        path="exoplanet-exploration"
        element={<ExoplanetExplorationPage />}
      />
      <Route path="why" element={<NDVI />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
