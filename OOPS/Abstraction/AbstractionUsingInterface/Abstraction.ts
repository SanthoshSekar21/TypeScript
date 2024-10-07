interface Shape{
 color:string;
 area():number;
 display():void;
}
 class Circle implements Shape{
    radius:number;
    color: string;
    constructor(radius:number,color:string){
        this.radius=radius;
        this.color=color;
    }
    area(): number {
        return Math.PI*Math.pow(this.radius,2);
    };
    display(): void {
        console.log(`A ${this.color} circle with area ${this.area()} `);
    };
 };
 const circle=new Circle(5,'Green');
 circle.display();