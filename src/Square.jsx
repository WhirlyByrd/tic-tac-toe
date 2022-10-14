import React from "react";



const Square = (props) => {

    
    const handleClick = () => {
        // if squareValue is empty
        if (!props.squareValue) {
            // and if the player is true
            if (props.player) {
                //change the value at that index to "X"
                props.squares.splice(props.index, 1, "X");
                //reset the array with the new squares array
                props.setSquares(props.squares);
                //switch the player
                props.setPlayer(!props.player)
            } else {
                //the player is set to false and is the O 
                props.squares.splice(props.index, 1, "O");
                //reset the array again
                props.setSquares(props.squares);
                //switch the player again
                props.setPlayer(!props.player);
            }
        }
    };

    console.log(props.squares, props.player)
   
    // the square itself has an onClick listening for the handleClick function
    return (
        <div className="square" onClick={handleClick}>
            {/* //ternary to see is squareValue is O or not */}
            {props.squareValue === "O" ? "O" : props.squareValue}
        </div>
    )
}

export default Square;