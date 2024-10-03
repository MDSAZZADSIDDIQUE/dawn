import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import GeoLocation from "./GeoLocation";

const FarmingSchedulerCreationForm = () => {
  const navigate = useNavigate();
  const navigateToFarmingCalendar = () => {
    navigate("/farming-calendar");
  };
  const [selectedValue, setSelectedValue] = useState(null);
  const onchange = (args) => {
    /*Displays selected date in the label*/
    setSelectedValue(args.value.toLocaleDateString());
  };
  return (
    <div className="flex-1">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body flex justify-center items-center space-y-3">
          <h2 className="card-title">Farming Scheduler Creation Form</h2>
          <GeoLocation />
          <form
            onSubmit={navigateToFarmingCalendar}
            className="flex justify-center items-center flex-col space-y-6"
          >
            <label className="input input-bordered flex items-center gap-2 w-full">
              Crop Name
              <input
                type="text"
                className="grow"
                placeholder="90"
                name="n"
                onChange={(event) => {
                  setN(event.target.value);
                }}
              />
            </label>

            <label>Starting Date</label>
            <div className="control-pane">
              <div className="control-section">
                <div
                  className="calendar-control-section"
                  style={{ overflow: "auto" }}
                >
                  <CalendarComponent change={onchange}></CalendarComponent>
                  <label id="date_label">
                    Selected Value: {selectedValue}{" "}
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-primary w-full" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmingSchedulerCreationForm;
