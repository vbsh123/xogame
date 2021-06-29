export default class Tile {
    private marked: Number;

    constructor() {
        this.marked = 0;
    }

    public setMarkedX() {
        this.marked = 1;
    }

    public setMarkedO() {
        this.marked = 2;
    }

    public getMarked(): Number {
        return this.marked;
    }

    public setMarked(turn: Number) {
        this.marked = turn;
    }
}