import FarmMonitoringHistoryPage from "./FarmMonitoringHistoryPage";

const DashboardPage = () => {
  return (
    <div class="grid grid-cols-2 gap-4 w-full">
      <div class="">04</div>
      <div class="">05</div>
      <div class="col-span-3">
        <FarmMonitoringHistoryPage />
      </div>
    </div>
  );
};

export default DashboardPage;
