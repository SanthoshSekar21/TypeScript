var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    ;
    Circle.prototype.display = function () {
        console.log("A ".concat(this.color, " circle with area ").concat(this.area(), " "));
    };
    ;
    return Circle;
}());
;
var circle = new Circle(5, 'Green');
circle.display();
