import React from "react";
import "../../styles/square.css";

class SquareClass extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export function renderSquare(i, squares, onClick) {
  return <SquareClass value={squares[i]} onClick={() => onClick(i)} />;
}
