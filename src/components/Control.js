import React from "react";

const searchPosition = (list, currentAct) =>{
  let position = 0;
  // busco posicion del elemento a mover
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes(currentAct)) {
      position = i;
    }
  }
  return position;
}

const deleteItem = (list, currentAct) =>{
  // elimino el elemento a mover
  return list.map((e) => e.filter((m) => m !== currentAct));
}

export const Control = ({ currentAct, activities, setActivities }) => {
  const handleLeft = (e) => {
    e.preventDefault();
    let list = activities.slice();
    let position = 0;

    // busco posicion del elemento a mover
    position = searchPosition(list, currentAct)

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
    position = searchPosition(list, currentAct)

    // elimino el elemento a mover
    list = deleteItem(list, currentAct);

    // se adiciona el elemento en la nueva posición
    position = position + 1;
    position > (list.length - 1)
      ? (list[0][list[0].length] = currentAct)
      : (list[position][list[position].length] = currentAct);

    // se modifica el estado
    setActivities((activities) => list);
  };

  return (
    <div className="container mt-2">
      <input defaultValue={currentAct} type="text" />
      <button onClick={handleLeft} className="btn btn-primary ms-3">
        {"<"}
      </button>
      <button onClick={handleRight} className="btn btn-primary ms-1">
        {">"}
      </button>
    </div>
  );
};
