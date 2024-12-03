import React, { useState, useEffect } from "react";
import "./renuem.css";
import renuemImage1 from "./image/Renuemlogorenuempage.png";
import GaugeChart from "react-gauge-chart";

const Renuem = () => {
  const renuemDetails = [
    "Developed a renewable energy investment app using React Native (Expo) and Node.js with Express.js, enabling individuals to invest in wind farms and solar panels through a scalable and secure platform.",
    "Deployed the backend on AWS, integrating MySQL RDS for efficient data management and real-time investment tracking.",
    "Collaborated with stakeholders to align the app with business goals, driving user engagement and satisfaction.",
  ];

  const images = [renuemImage1];
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
    <div className="renuem-container">
      {/* Image Slider */}
      <div className="renuem-image-container">
        <img
          src={images[currentImageIndex]}
          alt="Renuem"
          className="renuem-image"
        />
       
      </div>

      {/* Text Content */}
      <div className="renuem-content">
        <h1 className="renuem-title">🌍 Renuem</h1>
        <h2>What is Renuem?</h2><br></br>
        <p className="renuem-summary">
          Renuem Labs is a renewable energy investment company dedicated to
          creating scalable platforms for investments in solar and wind energy,
          promoting sustainability and innovation.
        </p><br></br>

        {/* Updated Summary Section */}
        <h2>Top 3 Skils Renuem Taught Me and My Current Confidence Levels</h2><br></br>
        <p className="renuem-summary">
          During the development of the Renuem app, I used several tools, but
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
        <ul className="renuem-bullet-points">
          {renuemDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Renuem;
