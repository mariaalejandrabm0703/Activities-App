import { useState } from "react";
import { Control } from "./components/Control";
import Tablero from "./components/Tablero";

function App() {
  const [activities, setActivities] = useState([
    ["Act1-1", "Act1-2", "Act1-3"],
    ["Act2-1"],
    ["Act3-1", "Act3-2", "Act3-3", "Act3-4"],
    ["Act4-1", "Act4-2"],
  ]);

  const [currentAct, setCurrentAct] = useState("");

  return (
    <div className="container mt-2">
      <h2>Activities:</h2>
      <hr />
      <Control
        currentAct={currentAct}
        activities={activities}
        setActivities={setActivities}
      />
      <Tablero activities={activities} setCurrentAct={setCurrentAct} />
    </div>
  );
}

export default App;
