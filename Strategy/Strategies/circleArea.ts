import { AreaStrategy } from "../Interfaces";

export class CircleArea implements AreaStrategy{
    private radius: number;

    constructor(radius: number){
        this.radius = radius
    }

    public calArea(): number {
        return Math.pow(this.radius, 2) * Math.PI
    }
}