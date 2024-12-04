import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import AboutMePage from './Aboutme';
import ContactMePage from './contactme';
import Project from './Project';
import GaugeChartComponent from "./GaugeChartComponent"; // Ensure this path matches the location of your component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/project" element={<Project />} />
      

        {/* Add a new route for the gauge chart */}
        <Route path="/gauge-chart" element={<GaugeChartComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
