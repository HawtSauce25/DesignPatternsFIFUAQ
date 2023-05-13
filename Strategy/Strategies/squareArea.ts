import { AreaStrategy } from "../Interfaces";

export class SquareArea implements AreaStrategy{
    private side_length: number;

    constructor(side_length: number){
        this.side_length = side_length;
    }

    calArea(): number {
        return Math.pow(this.side_length, 2)
    }
}