import React from "react";

import "./App.css";
import { Routes } from "./Routes";
import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  return (
  <div className="App">
    <Navigation />
    <div className="routesContainer">
      <Routes className="mainContainer" />
    </div>
  </div>
  );
}

export default App;
