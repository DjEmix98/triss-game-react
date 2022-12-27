import React from "react";
import { calculateWinner } from "../../utils/winner-utils";
import { BoardClass } from "../board/Board";
import "../../styles/game.css";
export class GameClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner
      ? "Winner: " + winner
      : "Next player: " + (this.state.xIsNext ? "X" : "O");
    const moves = history.map((_, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move} className="game__list game__list--item">
          <button onClick={() => this.jumpTo(move, this.setState, this.state)}>
            {desc}
          </button>
        </li>
      );
    });
    return (
      <div>
        <BoardClass
          currentState={current.squares}
          history={history}
          status={status}
          onClick={(i) => this.handleClick(i, this.state, this.setState)}
        ></BoardClass>
        <ol className="game__list">{moves}</ol>
      </div>
    );
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
}
