import React, { useState } from "react";
import './App.css';

const CarForm = () => {
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    features: [],
    transmission: "",
    priceRange: 0,
    contactNumber: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData); // Display form data in the console
    setCarData({
      make: "",
      model: "",
      year: "",
      mileage: "",
      condition: "",
      features: [],
      transmission: "",
      priceRange: 0,
      contactNumber: ""
    }); // Reset the form fields
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setCarData((prevData) => ({
        ...prevData,
        features: [...prevData.features, value]
      }));
    } else {
      setCarData((prevData) => ({
        ...prevData,
        features: prevData.features.filter((feature) => feature !== value)
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Car Sell Form</h1>

      <div className="form-group">
        <label htmlFor="make">Car Make</label>
        <input type="text" id="make" name="make" value={carData.make} onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="model">Car Model</label>
        <input type="text" id="model" name="model" value={carData.model} onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input type="date" id="year" name="year" value={carData.year} onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="mileage">Mileage</label>
        <input type="number" id="mileage" name="mileage" value={carData.mileage} onChange={handleInputChange} required />
      </div>

      
      <div className="form-group">
        <label>Features</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="features" value="air_conditioning" checked={carData.features.includes("air_conditioning")} onChange={handleCheckboxChange} />Air Conditioning</label>
          <label><input type="checkbox" name="features" value="power_steering" checked={carData.features.includes("power_steering")} onChange={handleCheckboxChange} />Power Steering</label>
          <label><input type="checkbox" name="features" value="power_windows" checked={carData.features.includes("power_windows")} onChange={handleCheckboxChange} />Power Windows</label>
          <label><input type="checkbox" name="features" value="abs" checked={carData.features.includes("abs")} onChange={handleCheckboxChange} />Speed/hour</label>
          <label><input type="checkbox" name="features" value="navigation_system" checked={carData.features.includes("navigation_system")} onChange={handleCheckboxChange} />Navigation System</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="condition">Condition</label>
        <div className="radio-group">
          <label><input type="radio" name="condition" value="excellent" checked={carData.condition === "excellent"} onChange={handleInputChange} />Excellent</label>
          <label><input type="radio" name="condition" value="good" checked={carData.condition === "good"} onChange={handleInputChange} />Good</label>
          <label><input type="radio" name="condition" value="fair" checked={carData.condition === "fair"} onChange={handleInputChange} />Fair</label>
          <label><input type="radio" name="condition" value="poor" checked={carData.condition === "poor"} onChange={handleInputChange} />Poor</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="transmission">Transmission</label>
        <select id="transmission" name="transmission" value={carData.transmission} onChange={handleInputChange}>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="price_range">Price Range</label>
        <input type="range" id="price_range" name="priceRange" min="0" max="100000" step="1000" value={carData.priceRange} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label htmlFor="contact_number">Contact Number</label>
        <input type="text" id="contact_number" name="contactNumber" value={carData.contactNumber} onChange={handleInputChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CarForm;

// import React, { useState } from 'react';

// const CarForm = () => {
//   const [carData, setCarData] = useState({
//     make: "",
//     model: "",
//     year: "",
//     mileage: "",
//     condition: "",
//     features: [],
//     transmission: "",
//     priceRange: 0,
//     contactNumber: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(carData); // Display form data in the console
//     setCarData({
//       make: "",
//       model: "",
//       year: "",
//       mileage: "",
//       condition: "",
//       features: [],
//       transmission: "",
//       priceRange: 0,
//       contactNumber: ""
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCarData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
//     let updatedFeatures = [...carData.features];

//     if (checked) {
//       updatedFeatures.push(value);
//     } else {
//       updatedFeatures = updatedFeatures.filter(feature => feature !== value);
//     }

//     setCarData(prevData => ({
//       ...prevData,
//       features: updatedFeatures
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Car Sell Form</h2>

//       <div className="form-group">
//         <label htmlFor="make">Car Make</label>
//         <input type="text" id="make" name="make" value={carData.make} onChange={handleInputChange} required />
//       </div>

//       {/* Other form fields */}

//       <div className="form-group">
//         <label>Features</label>
//         <div className="checkbox-group">
//           <label><input type="checkbox" name="features" value="air_conditioning" checked={carData.features.includes("air_conditioning")} onChange={handleCheckboxChange} />Air Conditioning</label>
//           <label><input type="checkbox" name="features" value="power_steering" checked={carData.features.includes("power_steering")} onChange={handleCheckboxChange} />Power Steering</label>
//           <label><input type="checkbox" name="features" value="power_windows" checked={carData.features.includes("power_windows")} onChange={handleCheckboxChange} />Power Windows</label>
//           <label><input type="checkbox" name="features" value="abs" checked={carData.features.includes("abs")} onChange={handleCheckboxChange} />ABS</label>
//           <label><input type="checkbox" name="features" value="navigation_system" checked={carData.features.includes("navigation_system")} onChange={handleCheckboxChange} />Navigation System</label>
//         </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="condition">Condition</label>
//         <div className="radio-group">
//           <label><input type="radio" name="condition" value="excellent" checked={carData.condition === "excellent"} onChange={handleInputChange} />Excellent</label>
//           <label><input type="radio" name="condition" value="good" checked={carData.condition === "good"} onChange={handleInputChange} />Good</label>
//           <label><input type="radio" name="condition" value="fair" checked={carData.condition === "fair"} onChange={handleInputChange} />Fair</label>
//           <label><input type="radio" name="condition" value="poor" checked={carData.condition === "poor"} onChange={handleInputChange} />Poor</label>
//         </div>
//       </div>

//       {/* Other form fields */}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CarForm;
