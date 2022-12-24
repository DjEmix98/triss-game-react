import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function renderSquare(i, state, setState) {
  return (
    <Square
      value={state.squares[i]}
      onClick={() => handleClick(i, state, setState)}
    />
  );
}

function handleClick(i, state, setState) {
  const squares = state.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = state.xIsNext ? "X" : "O";
  setState({ squares: squares, xIsNext: !state.xIsNext });
}

function Board() {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calculateWinner(state.squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (state.xIsNext
    ? "X"
    : "O");
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0, state, setState)}
        {renderSquare(1, state, setState)}
        {renderSquare(2, state, setState)}
      </div>
      <div className="board-row">
        {renderSquare(3, state, setState)}
        {renderSquare(4, state, setState)}
        {renderSquare(5, state, setState)}
      </div>
      <div className="board-row">
        {renderSquare(6, state, setState)}
        {renderSquare(7, state, setState)}
        {renderSquare(8, state, setState)}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
