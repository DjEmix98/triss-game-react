import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
    stepNumber: 0
  });
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (state.xIsNext ? "X" : "O");
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move, setState, state)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="App">
      <Board
        currentState={current.squares}
        history={history}
        status={status}
        onClick={(i) => handleClick(i, state, setState)}
      ></Board>
      <ol>{moves}</ol>
    </div>
  );
}

function jumpTo(step, setState, state) {
  console.log('state before: ', state)
  setState({
    stepNumber: step,
    xIsNext: (step % 2) === 0,
    history: state.history.slice()
  });
  console.log('state after: ', state)
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function renderSquare(i, squares, onClick) {
  return (
    <Square
      value={squares[i]}
      onClick={() => onClick(i)}
    />
  );
}

function handleClick(i, state, setState) {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = state.xIsNext ? "X" : "O";
  setState({
    history: history.concat([
      {
        squares: squares,
      },
    ]),
    stepNumber: history.length,
    xIsNext: !state.xIsNext,
  });
}

function Board(props) {
  return (
    <div>
      <div className="status">{props.status}</div>
      <div className="board-row">
        {renderSquare(0, props.currentState, props.onClick, props.history)}
        {renderSquare(1, props.currentState, props.onClick, props.history)}
        {renderSquare(2, props.currentState, props.onClick, props.history)}
      </div>
      <div className="board-row">
        {renderSquare(3, props.currentState, props.onClick, props.history)}
        {renderSquare(4, props.currentState, props.onClick, props.history)}
        {renderSquare(5, props.currentState, props.onClick, props.history)}
      </div>
      <div className="board-row">
        {renderSquare(6, props.currentState, props.onClick, props.history)}
        {renderSquare(7, props.currentState, props.onClick, props.history)}
        {renderSquare(8, props.currentState, props.onClick, props.history)}
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
