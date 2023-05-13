import { CircleArea } from './circleArea'
import { Geometric } from './geometric'
import { RectangleArea } from './rectangleArea';
import { SquareArea } from './squareArea'
import { TriangleArea } from './triangleArea'

const triangle = new Geometric(new TriangleArea(3, 4));
console.log('El area del triangulo es:', triangle.calArea());
const circle = new Geometric(new CircleArea(5))
console.log("El area del circulo es: ", circle.calArea())
const square = new Geometric(new SquareArea(2))
console.log("El area del cuadrado es: ", square.calArea())
const rectangle = new Geometric(new RectangleArea(3, 4))
console.log("El area del rectangulo es de: ", rectangle.calArea())

