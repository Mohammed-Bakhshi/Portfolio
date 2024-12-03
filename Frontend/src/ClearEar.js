import React, { useState, useEffect } from "react";
import "./ClearEar.css";
import ClearEarImage1 from "./image/Clearear.jpg";
import ClearEarImage2 from "./image/Renuem-Lab.jpg";
import ClearEarImage3 from "./image/Clearear.jpg";
import GaugeChart from "react-gauge-chart";

const ClearEar = () => {
  const ClearEarDetails = [
    "Designed and developed an Android app using React Native to manage patient appointments and streamline operations for a hearing clinic..",
    "Integrated a local database with AsyncStorage to store and track customer details and appointment history.",
    "Worked closely with clinic staff to gather requirements and ensure the app met operational needs and improved workflow efficiency ",
  ];

  const images = [ClearEarImage1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // State and effect for animated gauge filling
  const [reactNativePercent, setReactNativePercent] = useState(0);
  const [sqlPercent, setSqlPercent] = useState(0);
  const [expressPercent, setExpressPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReactNativePercent((prev) => {
        if (prev < 0.8) return Math.min(prev + 0.01, 0.8);
        clearInterval(interval);
        return prev;
      });
    }, 50);

    const sqlInterval = setInterval(() => {
      setSqlPercent((prev) => {
        if (prev < 0.7) return Math.min(prev + 0.01, 0.8);
        clearInterval(sqlInterval);
        return prev;
      });
    }, 50);

    const expressInterval = setInterval(() => {
      setExpressPercent((prev) => {
        if (prev < 0.5) return Math.min(prev + 0.01, 0.6);
        clearInterval(expressInterval);
        return prev;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(sqlInterval);
      clearInterval(expressInterval);
    };
  }, []);

  return (
    <div className="Clear-Ear-container">
      {/* Image Slider */}
      <div className="Clear-Ear-image-container">
        <img
          src={images[currentImageIndex]}
          alt="Clear-Ear"
          className="Clear-Ear-image"
        />
      </div>

      {/* Text Content */}
      <div className="Clear-Ear-content">
        <h1 className="Clear-Ear-title">🦻 Clear Ear</h1>
        <h2>What is Clear Ear?</h2><br></br>
        <p className="Clear-Ear-summary">
        Clear Ear is a professional microsuction clinic specializing in safe ear wax removal, hearing protection services, and custom earplugs, ensuring effective and personalized care for every patient.
        </p><br></br>

        {/* Updated Summary Section */}
        <h2>Top 3 Skils Clear Ear Taught Me and My Current Confidence Levels</h2><br></br>
        <p className="Clear-Ear-summary">
          During the development of the Clear ear appointment Tracking and organising app, I used several tools, but
          the following were the core technologies that powered this innovative
          platform:
        </p>

        {/* Gauge Charts with Animation */}
        <div className="gauge-charts-container">
          <div className="gauge-chart">
            <h3>React Native</h3>
            <GaugeChart
              id="react-native-gauge"
              percent={reactNativePercent}
              nrOfLevels={5}
              colors={["#00FFB3", "#2D3748"]}
              arcWidth={0.2}
              arcPadding={0.03}
              needleColor="#FFFFFF"  // Set the pointer color to white
              textColor="#FFFFFF"
              animate={true}
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="gauge-chart">
            <h3>SQL</h3>
            <GaugeChart
              id="sql-gauge"
              percent={sqlPercent}
              nrOfLevels={5}
              colors={["#00FFB3", "#2D3748"]}
              arcWidth={0.2}
              arcPadding={0.03}
              textColor="#FFFFFF"
              needleColor="#FFFFFF"  // Set the pointer color to white
              animate={true}
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="gauge-chart">
            <h3>Express.js</h3>
            <GaugeChart
              id="express-gauge"
              percent={expressPercent}
              nrOfLevels={5}
              colors={["#00FFB3", "#2D3748"]}
              arcWidth={0.2}
              arcPadding={0.03}
              needleColor="#FFFFFF"  // Set the pointer color to white
              textColor="#FFFFFF"
              animate={true}
              style={{ width: "200px", height: "100px" }}
            />
          </div>
        </div>

        <h2>What My Role Was</h2><br></br>

        {/* Additional Details */}
        <ul className="Clear-Ear-bullet-points">
          {ClearEarDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClearEar;
