import React from "react";
import citiesData from "../Components/Cities.json";
import Navbar from "../Components/Navbar";
import SelectDate from "../Components/SelectDate";

const Dashboard = ({ city }) => {
  const selectedCity = citiesData.find((c) => c.name === city);

  if (!selectedCity) {
    return <p>No city selected</p>;
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          margin: "auto",
          top: 150,
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <h2>{selectedCity.name}</h2>
        <p>{selectedCity.address}</p>
        <SelectDate/>
        <button 
        style={{
          border:"1px solid green",
          padding:"15px",
          borderRadius:"5px",
          width:"440px",
          backgroundColor: "#10a310",  
        }}
        >Find Cars</button>
      </div>
      <img
        src="https://www.zoomcar.com/img/web_banner.jpg"
        alt="header"
        width="100%"
        height="auto"
      ></img>
    </div>
  );
};

export default Dashboard;
