import { useState } from "react";
import { Control } from "./components/Control";
import { Tablero } from "./components/Tablero";

function App() {
  const [activities, setActivities] = useState([["1","2","3"],["1"],["1","2","3","4"],["1","2"]]);

  return (
    <>
      <Control />
      <Tablero />
    </>
  );
}

export default App;
