import { Game } from "./game/Game";
import "./App.css";
import { GameClass } from "./with-classes/game/Game";

function App() {
  return (
    <div className="App">
    <h2>Functional components: </h2>
     <Game></Game>
     <h2>With classes:</h2>
     <GameClass></GameClass>
    </div>
  );
}

export default App;
