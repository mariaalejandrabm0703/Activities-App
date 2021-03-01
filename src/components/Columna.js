import React from "react";
import { Item } from "./Item";

export const Columna = ({ items,step, handleClick }) => {
  return (
    <div className="col">
      <h3>Fase {step}:</h3>
      {items.map((item, i) => (
        <Item key={i} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};
