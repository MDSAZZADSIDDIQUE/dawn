import { useState } from "react";

const CropRecommendationPage = () => {
  const [n, setN] = useState(null);
  const [p, setP] = useState(null);
  const [k, setK] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [ph, setPH] = useState(null);
  const [rainfall, setRainfall] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("n", n);
    formData.append("p", p);
    formData.append("k", k);
    formData.append("temperature", temperature);
    formData.append("humidity", humidity);
    formData.append("ph", ph);
    formData.append("rainfall", rainfall);
    try {
      const response = await fetch("http://127.0.0.1:5000/croprecommendation", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url('closeup-shot-rice-plant-sunset-with-plantation-background.jpg')",
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="card bg-base-100 bg-opacity-75 shadow-xl">
          <div className="card-body flex justify-center items-center space-y-6">
            <h2 className="card-title text-3xl">Crop Recommendation</h2>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center flex-col space-y-6"
            >
              <label className="input input-bordered flex items-center gap-2 w-full">
                Nitrogen
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
              <label className="input input-bordered flex items-center gap-2 w-full">
                Phosphorus
                <input
                  type="text"
                  className="grow"
                  placeholder="42"
                  name="p"
                  onChange={(event) => {
                    setP(event.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full">
                Potassium
                <input
                  type="text"
                  className="grow"
                  placeholder="43"
                  name="k"
                  onChange={(event) => {
                    setK(event.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full">
                Temperature
                <input
                  type="text"
                  className="grow"
                  placeholder="20.87974371"
                  name="temperature"
                  onChange={(event) => {
                    setTemperature(event.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full">
                Humidity
                <input
                  type="text"
                  className="grow"
                  placeholder="82.00274423"
                  name="humidity"
                  onChange={(event) => {
                    setHumidity(event.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full">
                pH
                <input
                  type="text"
                  className="grow"
                  placeholder="6.502985292000001"
                  name="ph"
                  onChange={(event) => {
                    setPH(event.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full">
                Rainfall
                <input
                  type="text"
                  className="grow"
                  placeholder="202.9355362"
                  name="rainfall"
                  onChange={(event) => {
                    setRainfall(event.target.value);
                  }}
                />
              </label>

              <button className="btn btn-primary w-full" type="submit">
                Predict
              </button>
            </form>

            {loading && (
              <span className="loading loading-spinner text-primary loading-lg"></span>
            )}

            {prediction && (
              <>
                <h2 className="btn btn-primary w-full">
                  {prediction.class.charAt(0).toUpperCase() +
                    prediction.class.slice(1)}
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRecommendationPage;
