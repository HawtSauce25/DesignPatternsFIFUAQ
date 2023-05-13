import { AreaStrategy } from "../Interfaces";

export class TriangleArea implements AreaStrategy{
    private height: number;
    private width: number

    constructor(height: number, width:number){
        this.height = height;
        this.width = width;
    }
    
    public calArea(): number {
        return (this.height * this.width) / 2;
    }
}