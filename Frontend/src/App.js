import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import AboutMePage from './Aboutme';
import ContactMePage from './contactme';
import Project from './Project';
import Renuem from './renuem';  // Correct the casing here
import MosGames from './MosGames';
import TheResidentsClub from './TheResidentsClub';
import ClearEar from './ClearEar';
import GaugeChartComponent from "./GaugeChartComponent"; // Ensure this path matches the location of your component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/renuem" element={<Renuem />} />
        <Route path="/MosGames" element={<MosGames />} />
        <Route path="/TheResidentsClub" element={<TheResidentsClub />} />
        <Route path="/ClearEar" element={<ClearEar />} />

        {/* Add a new route for the gauge chart */}
        <Route path="/gauge-chart" element={<GaugeChartComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
