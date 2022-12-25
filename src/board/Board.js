import { renderSquare } from "../square/Square";
import "./board.css";
export function Board(props) {
  return (
    <div>
      <div className="board__status">{props.status}</div>
      <div className="board__row">
        {renderSquare(0, props.currentState, props.onClick, props.history)}
        {renderSquare(1, props.currentState, props.onClick, props.history)}
        {renderSquare(2, props.currentState, props.onClick, props.history)}
      </div>
      <div className="board__row">
        {renderSquare(3, props.currentState, props.onClick, props.history)}
        {renderSquare(4, props.currentState, props.onClick, props.history)}
        {renderSquare(5, props.currentState, props.onClick, props.history)}
      </div>
      <div className="board__row">
        {renderSquare(6, props.currentState, props.onClick, props.history)}
        {renderSquare(7, props.currentState, props.onClick, props.history)}
        {renderSquare(8, props.currentState, props.onClick, props.history)}
      </div>
    </div>
  );
}
