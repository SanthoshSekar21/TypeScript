//Encapsulation is one of the fundamental principles of object-oriented programming (OOP), and TypeScript supports this concept well. 
// It involves bundling the data (attributes) and methods (functions) that operate on the data into a single unit, typically a class.
//  Additionally, encapsulation restricts direct access to some of the object’s components, which is crucial for preventing unintended interference and misuse.
class Employees{
    private salary:number;
    private name:string;
     public setName(name:string):void{
        this.name=name;
     };
     public setSalary(salary:number):void{
        if(salary>0)
        this.salary=salary;
    else 
    console.log('Enter the Valid Salary');
     };
     public getName():string{
        return this.name;
     }
     public getSalary():number{
        return this.salary;
     }
}
class EmpDetail extends Employees{
    public displayDetail():void{
        console.log(`EmployeeName:${this.getName()} \n\ EmployeeSalary:${this.getSalary()}`);
    }
}
const Emp=new EmpDetail();
Emp.setName('santhosh');
Emp.setSalary(100000);
Emp.displayDetail();