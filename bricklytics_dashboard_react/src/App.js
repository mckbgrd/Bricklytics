import React from "react";
import HypotheekModule from "./components/HypotheekModule";
import InvesteringsScore from "./components/InvesteringsScore";
import ScenarioVergelijking from "./components/ScenarioVergelijking";
import HistorischePrijsGrafiek from "./components/HistorischePrijsGrafiek";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>Bricklytics Dashboard</h1>
      <HypotheekModule />
      <InvesteringsScore />
      <ScenarioVergelijking />
      <HistorischePrijsGrafiek />
    </div>
  );
}

export default App;
