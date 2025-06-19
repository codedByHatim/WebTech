import React, { useEffect, useState } from 'react';
import './Vehicles.css';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/vehicles')
      .then(res => res.json())
      .then(data => setVehicles(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="vehicles-page">
      <h2>Our Vehicles</h2>
      <div className="vehicle-grid">
        {vehicles.map(vehicle => (
          <div className="vehicle-card" key={vehicle._id}>
            <img src={`http://localhost:5000${vehicle.image}`} alt={vehicle.name} />
            <h4>{vehicle.name}</h4>
            <p>Brand: {vehicle.brand}</p>
            <p>Type: {vehicle.type}</p>
            <p>Price: ${vehicle.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
