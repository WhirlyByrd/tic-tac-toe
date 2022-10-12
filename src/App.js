import './App.css';
import Square from "./Square"
//destructure useState from React
import {useState} from 'react'

function App() {
  // Using array destructuring initialize the state for the games squares to an array of 9 empty strings
  //setSquares name of function
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  
  //initialize state of the player variable to a boolean of true
  //setPlayer name of function
  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
     {/* Add a prop of squares that is equal to the squares state variable to the Square component

      Add a prop of setSquares that is equal to the setSquares function to the Square component

      Add a prop of player that is equal to the player state variable to the Square component

      Add a prop of setPlayer that is equal to the setPlayer function to the Square component */}
      <Square 
      squares={squares}
      setSquares={setSquares}
      player={player}
      setPlayer={setPlayer}
      />
    </div>
  );
}

export default App;
 