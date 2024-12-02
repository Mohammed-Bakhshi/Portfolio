import React, { useState, useEffect } from "react";
import "./MosGames.css";
import MosGamesImage1 from "./image/Mo's Games logo.jpg";
import GaugeChart from "react-gauge-chart";

const MosGames = () => {
  const MosGamesDetails = [
    "Conducted data analysis for the launch of bubble tea in Pakistan, identifying key demographics and customer segments for targeted marketing.",
    "Analysed market trends to assess the possibility of expanding into new locations for bubble tea and nitrogen ice cream shops.",
    "Developed and maintained the Mo’s Games website using HTML, CSS, and JavaScript, improving customer engagement and online presence.",
    "Utilized data insights to optimize marketing strategies, driving successful product launches and business growth",
  ];

  const images = [MosGamesImage1];
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
  const [WordpressPercent, setWordpressPercent] = useState(0);
  const [DatabasePercent, setDatabasePercent] = useState(0);
  const [expressPercent, setExpressPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordpressPercent((prev) => {
        if (prev < 0.8) return Math.min(prev + 0.01, 0.8);
        clearInterval(interval);
        return prev;
      });
    }, 50);

    const DatabaseInterval = setInterval(() => {
      setDatabasePercent((prev) => {
        if (prev < 0.7) return Math.min(prev + 0.01, 0.7);
        clearInterval(DatabaseInterval);
        return prev;
      });
    }, 50);

    const expressInterval = setInterval(() => {
      setExpressPercent((prev) => {
        if (prev < 0.8) return Math.min(prev + 0.01, 0.9);
        clearInterval(expressInterval);
        return prev;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(DatabaseInterval);
      clearInterval(expressInterval);
    };
  }, []);

  return (
    <div className="MosGames-container">
      {/* Image Slider */}
      <div className="MosGames-image-container">
        <img
          src={images[currentImageIndex]}
          alt="MosGames"
          className="MosGames-image"
        />
      
      </div>

      {/* Text Content */}
      <div className="MosGames-content">
        <h1 className="MosGames-title">🎮 MosGames</h1>
        <h2>What is MosGames?</h2><br></br>
        <p className="MosGames-summary">
        Mos Games is a gaming company dedicated to creating multiplayer and immersive experiences that bring players together.
        </p><br></br>

        {/* Updated Summary Section */}
        <h2>Top 3 Skills Mo's Games Taught Me and My Current Confidence Levels</h2><br></br>
        <p className="MosGames-summary">
          During my time at Mo's Games, I used a vast verity of tools, but
          the following were the core technologies that made Mo's Games a successful business:
        </p>

        {/* Gauge Charts with Animation */}
        <div className="gauge-charts-container">
          <div className="gauge-chart">
            <h3>Wordpress</h3>
            <GaugeChart
              id="react-native-gauge"
              percent={WordpressPercent}
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
            <h3>Databases</h3>
            <GaugeChart
              id="sql-gauge"
              percent={DatabasePercent}
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
            <h3>Excel</h3>
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
          {MosGamesDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MosGames;
