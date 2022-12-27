import { useState } from "react";
import { calculateWinner } from "../utils/winner-utils";
import { Board } from "../board/Board";
import "../styles/game.css";
export function Game() {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
    stepNumber: 0,
  });
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (state.xIsNext ? "X" : "O");
  const moves = history.map((_, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move} className="game__list game__list--item">
        <button onClick={() => jumpTo(move, setState, state)}>{desc}</button>
      </li>
    );
  });
  return (
    <div>
      <Board
        currentState={current.squares}
        history={history}
        status={status}
        onClick={(i) => handleClick(i, state, setState)}
      ></Board>
      <ol className="game__list">{moves}</ol>
    </div>
  );
}

function jumpTo(step, setState, state) {
  setState({
    stepNumber: step,
    xIsNext: step % 2 === 0,
    history: state.history.slice(),
  });
}

function handleClick(i, state, setState) {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (!calculateWinner(squares) && !squares[i]) {
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
}
