import React from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="d-flex justify-content-center main-nav-link">
      <Link to="/breakfast">Brakfast</Link>
      <Link to="/lunch">Lunch</Link>
      <Link to="/dinner">Dinner</Link>
    </div>
  );
};

export default MainContent;
