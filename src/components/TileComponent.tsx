import React, {useState} from 'react';
import TileModel from '../model/Tile';
import '../styling/tile.css';

interface Iprops {
    tile: TileModel;
    turn: number;
    setTurn: Function;
}

const Tile = (props: Iprops) => {

    const [mark, setMark] = useState(props.tile.getMarked());

    const getMark = () => {
        if (mark === true) {
            return "X";
        }

        if (mark === false) {
            return "O";
        }

        return "";
    }

    const markAction = () => {
        setMark(props.turn)
        props.setTurn(!props.turn)
    }

    return (
        <div className = "tile" onClick = {markAction}>
            {getMark()}
        </div>
    );
}
export default Tile;