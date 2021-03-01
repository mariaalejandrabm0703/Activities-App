import React from "react";
import { Item } from "./Item";

export const Columna = ({ items, step, handleClick, currentAct }) => {
  return (
    <div className="col">
      <h3>Fase {step}:</h3>
      {items.map((item, i) => (
        <Item
          key={i}
          item={item}
          currentAct={currentAct}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
