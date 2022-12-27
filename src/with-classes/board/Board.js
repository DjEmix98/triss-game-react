import { renderSquare } from "../square/Square";
import "../../styles/board.css";
import React from "react";
export class BoardClass extends React.Component {
  render() {
    return (
      <div>
        <div className="board__status">{this.props.status}</div>
        <div className="board__row">
          {renderSquare(
            0,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
          {renderSquare(
            1,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
          {renderSquare(
            2,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
        </div>
        <div className="board__row">
          {renderSquare(
            3,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
          {renderSquare(
            4,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
          {renderSquare(
            5,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
        </div>
        <div className="board__row">
          {renderSquare(
            6,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
          {renderSquare(
            7,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
          {renderSquare(
            8,
            this.props.currentState,
            this.props.onClick,
            this.props.history
          )}
        </div>
      </div>
    );
  }
}
