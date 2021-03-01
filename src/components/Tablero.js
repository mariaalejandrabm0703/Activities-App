import React, { Component } from "react";
import { Columna } from "./Columna";

export default class Tablero extends Component {
  render() {
    return (
      <div className="row mt-2 border">
        {this.props.activities.map((items, i) => (
          <Columna
            key={i}
            step={i + 1}
            items={items}
            currentAct={this.props.currentAct}
            handleClick={this.props.handleClick}
          />
        ))}
      </div>
    );
  }
}
