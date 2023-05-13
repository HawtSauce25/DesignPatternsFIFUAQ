import { AreaStrategy } from "../Interfaces";

export class RectangleArea implements AreaStrategy{
    private height: number
    private width: number

    constructor(height: number, width:number){
        this.height = height;
        this.width = width;
    }

    calArea(): number {
        return this.height * this.width;
    }
}