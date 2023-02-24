import React from 'react';
import citiesData from '../Components/Cities.json';
import Navbar from '../Components/Navbar';

const Dashboard = ({ city }) => {
  
    const selectedCity = citiesData.find(c => c.name === city);
  
    if (!selectedCity) {
      return <p>No city selected</p>;
    }
  
    return (
      <div>
        <Navbar/>
        <h2>{selectedCity.name}</h2>
        <p>{selectedCity.address}</p>
      </div>
    );
  }

export default Dashboard