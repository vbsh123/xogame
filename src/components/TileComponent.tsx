import React, {useState} from 'react';
import TileModel from '../model/Tile';
import '../styling/tile.css';
import { changeTurn } from '../utils/turn.utils';

interface Iprops {
    tile: TileModel;
    turn: number;
    setTurn: Function;
    winCheck: Function;
}

const Tile = (props: Iprops) => {

    const [mark, setMark] = useState(props.tile.getMarked());

    const getMark = () => {
        if (mark === 1) {
            return "X";
        }

        if (mark === 2) {
            return "O";
        }

        return "";
    }

    const markAction = () => {
        if (mark === 0) {
            props.tile.setMarked(props.turn);
            setMark(props.turn)
            const nextTurn = changeTurn(props.turn);
            props.setTurn(nextTurn);
            props.winCheck();
        }
    }

    return (
        <div className = "tile" onClick = {markAction}>
            {getMark()}
        </div>
    );
}
export default Tile;