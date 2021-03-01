import React from "react";

export const Control = ({ currentAct, move, handleLeft, handleRight }) => {
  return (
    <div className="container mt-2">
      <input defaultValue={currentAct} type="text" />
      <button
        disabled={!move.left}
        onClick={handleLeft}
        className="btn btn-primary ms-3"
      >
        {"<"}
      </button>
      <button
        disabled={!move.right}
        onClick={handleRight}
        className="btn btn-primary ms-1"
      >
        {">"}
      </button>
    </div>
  );
};
