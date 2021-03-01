import React from "react";
import { Item } from "./Item";

export const Columna = ({ items, setCurrentAct }) => {
  return (
    <div className="col">
      {items.map((item, i) => (
        <Item key={i} item={item} setCurrentAct={setCurrentAct} />
      ))}
    </div>
  );
};
