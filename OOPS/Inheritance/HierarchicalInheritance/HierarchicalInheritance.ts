// In hierarchical inheritance, multiple child classes inherit from a single parent class.
//  This pattern is useful when multiple classes share a common set of properties and methods from a parent class.
class Shape {
    public draw(): void {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    public draw(): void {
        console.log("Drawing a circle");
    }
}

class Rectangle extends Shape {
    public draw(): void {
        console.log("Drawing a rectangle");
    }
}


const circle = new Circle();
const rectangle = new Rectangle();
circle.draw();     // Output: Drawing a circle
rectangle.draw();  // Output: Drawing a rectangle
