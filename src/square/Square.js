import "../styles/square.css";
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export function renderSquare(i, squares, onClick) {
  return <Square value={squares[i]} onClick={() => onClick(i)} />;
}
