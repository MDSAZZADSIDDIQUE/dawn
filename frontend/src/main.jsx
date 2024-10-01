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
import FarmSimulatorPage from "./pages/FarmSimulatorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path="/farm-simulator" element={<FarmSimulatorPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
