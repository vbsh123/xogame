export default class Tile {
    private marked: number;

    constructor() {
        this.marked = 0;
    }

    public setMarkedO() {
        this.marked = 1;
    }

    public setMarkedX() {
        this.marked = 2;
    }

    public getMarked() {
        return this.marked;
    }
}