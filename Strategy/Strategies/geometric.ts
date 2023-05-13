
import {AreaStrategy } from '../Interfaces'

export class Geometric {
    private area: AreaStrategy;

    constructor(area: AreaStrategy){
        this.area = area;
    }

    public ChooseGeometric(area: AreaStrategy): void{
        this.area = area;
    }

    public calArea(): number{
        return this.area.calArea();
    }
}