import React from 'react';
import '../../styling/won-prompt.css'

interface Iprops {
    setNewGame: Function
}

const WonPrompt = (props: Iprops) => {

    const newGameClicked = () => {
        props.setNewGame(true);
    }

    return (
        <div className = 'won-prompt'>
            Start a new game? 🐧
            <button className = 'won-prompt-button' onClick={newGameClicked}>Yes</button>
        </div>
    );
}
export default WonPrompt;