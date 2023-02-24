import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import citiesData from "../Components/Cities.json";
import Dashboard from "./Dashboard";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  function handleCityChange(event) {
    const city = event.target.value;
    setSelectedCity(city);
    navigate(`/car?city=${city}`);
  }

  return (
    <div>
      <label htmlFor="city-select">Select a city:</label>
      <select id="city-select" value={selectedCity} onChange={handleCityChange}>
        <option value="">--Select a city--</option>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <Dashboard city={selectedCity}/>
    </div>
  );
};

export default Home;