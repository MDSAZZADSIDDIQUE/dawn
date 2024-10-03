import React, { useState } from "react";

function NDVI() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchNdviImage = async () => {
    if (lat && lon) {
      const response = await fetch(
        `http://localhost:5000/ndvi?lat=${lat}&lon=${lon}`
      );
      if (response.ok) {
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageUrl(imageObjectURL);
      } else {
        console.error("Failed to fetch NDVI image");
      }
    }
  };

  return (
    <div className="App">
      <h1>NDVI Image by Location</h1>
      <input
        type="text"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />
      <button onClick={fetchNdviImage}>Get NDVI Image</button>

      {imageUrl && (
        <div>
          <h2>NDVI Image:</h2>
          <img src={imageUrl} alt="NDVI" />
        </div>
      )}
    </div>
  );
}

export default NDVI;
