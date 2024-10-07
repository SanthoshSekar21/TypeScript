abstract class Vehicle{
    constructor(public brand:string){}
    abstract travel():void;
    
};
class Car extends Vehicle{
  constructor(brand:string){
    super(brand);
  }    
   public travel(): void {
      console.log(`To travel using the  ${this.brand} car `);
  };
};
class Bike extends Vehicle{
    constructor(brand:string){
        super(brand);
    }
      travel(): void {
     console.log(`to travel using ${this.brand} bike`);   
    };
};

const car=new Car("Thar");
car.travel();
const bike=new Bike('rx100');
bike.travel();