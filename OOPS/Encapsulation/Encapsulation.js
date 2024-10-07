var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employees = /** @class */ (function () {
    function Employees() {
    }
    Employees.prototype.setName = function (name) {
        this.name = name;
    };
    ;
    Employees.prototype.setSalary = function (salary) {
        if (salary > 0)
            this.salary = salary;
        else
            console.log('Enter the Valid Salary');
    };
    ;
    Employees.prototype.getName = function () {
        return this.name;
    };
    Employees.prototype.getSalary = function () {
        return this.salary;
    };
    return Employees;
}());
var EmpDetail = /** @class */ (function (_super) {
    __extends(EmpDetail, _super);
    function EmpDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmpDetail.prototype.displayDetail = function () {
        console.log("EmployeeName:".concat(this.getName(), " \n EmployeeSalary:").concat(this.getSalary()));
    };
    return EmpDetail;
}(Employees));
var Emp = new EmpDetail();
Emp.setName('santhosh');
Emp.setSalary(100000);
Emp.displayDetail();
