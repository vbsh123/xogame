import React from 'react';
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

    const getMark = () => {
        const tileMark = props.tile.getMarked();
        if (tileMark === 1) {
            return "X";
        }

        if (tileMark === 2) {
            return "O";
        }

        return "";
    }

    const markAction = () => {
        if (props.tile.getMarked() === 0) {
            props.tile.setMarked(props.turn);
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