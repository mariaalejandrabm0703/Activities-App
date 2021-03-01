import { useEffect, useState } from "react";
import { Control } from "./components/Control";
import Tablero from "./components/Tablero";

const searchPosition = (list, currentAct) => {
  let position = 0;
  // busco posicion del elemento a mover
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes(currentAct)) {
      position = i;
    }
  }
  return position;
};

const deleteItem = (list, currentAct) => {
  // elimino el elemento a mover
  return list.map((e) => e.filter((m) => m !== currentAct));
};

function App() {
  const [activities, setActivities] = useState([
    ["Act1-1", "Act1-2", "Act1-3"],
    ["Act2-1"],
    ["Act3-1", "Act3-2", "Act3-3", "Act3-4"],
    ["Act4-1", "Act4-2"],
  ]);

  const [currentAct, setCurrentAct] = useState("");
  const [move, setMove] = useState({
    right: true,
    left: true,
  });

  useEffect(() => {
    if (currentAct !== "") {
      let position = 0;

      // busco posicion del elemento a mover
      position = searchPosition(activities, currentAct);

      if (position === 0) {
        setMove({ right: true, left: false });
      } else if (position === activities.length - 1) {
        setMove({ left: true, right: false });
      } else {
        setMove({ left: true, right: true });
      }
    }
  }, [currentAct, activities]);

  const handleLeft = (e) => {
    e.preventDefault();
    let list = activities.slice();
    let position = 0;

    // busco posicion del elemento a mover
    position = searchPosition(list, currentAct);

    // elimino el elemento a mover
    list = deleteItem(list, currentAct);

    // se adiciona el elemento en la nueva posición
    position = position - 1;
    position < 0
      ? (list[list.length - 1][list[list.length - 1].length] = currentAct)
      : (list[position][list[position].length] = currentAct);

    // se modifica el estado
    setActivities((activities) => list);
  };

  const handleRight = (e) => {
    e.preventDefault();
    let list = activities.slice();
    let position = 0;

    // busco posicion del elemento a mover
    position = searchPosition(list, currentAct);

    // elimino el elemento a mover
    list = deleteItem(list, currentAct);

    // se adiciona el elemento en la nueva posición
    position = position + 1;
    position > list.length - 1
      ? (list[0][list[0].length] = currentAct)
      : (list[position][list[position].length] = currentAct);

    // se modifica el estado
    setActivities((activities) => list);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentAct(e.target.textContent);
  };

  return (
    <div className="container mt-2">
      <h2>Activities:</h2>
      <hr />
      <Control
        currentAct={currentAct}
        move={move}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
      <Tablero currentAct={currentAct} activities={activities} handleClick={handleClick} />
    </div>
  );
}

export default App;
