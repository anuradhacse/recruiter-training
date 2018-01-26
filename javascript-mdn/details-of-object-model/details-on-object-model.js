/*
Prototyping in JS
-----------------
       Employee
          ^
          |
   ================
   ^               ^
   |               |
 Manager       WorkerBee
                   ^
                   |
          ======================
          |                    |
      SalesPerson           Engineer
 
*/

function Employee(){
  this.name = '';
  this.dept = 'genaral';
}

function Manager(){
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
console.log("Manager: " + JSON.stringify(Manager));

function WorkerBee(){
  Employee.call(this);
  this.projects = [];
}

WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson(){
  WorkerBee.call(this);
  this.dept = 'Sales';
  this.quota = 100;
}

SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer(){
  WorkerBee.call(this);
  this.dept = 'Engineering';
  this.machine = '';
}

Engineer.prototype = Object.create(WorkerBee.prototype);

console.log(new Engineer());

/*
Adding properties to objects at runtime
----------------------------------------
1.adding to a single object
2.Adding to all objects
*/
mark = new Engineer();
mark.maritalStatus = 'single';

console.log(mark);//new property only for mark

Employee.prototype.speciality = 'NONE';//get this property for all the objects inherit from Employee

console.log(new Employee().speciality);
console.log(new Engineer().speciality);
console.log(mark.speciality)//mark also has the property although created before adding that property to prototype

console.log(Object.getPrototypeOf(mark));
result = Object.getOwnPropertyNames(mark);

console.log(result);

console.log('list all properties.....................')
function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}

result = listAllProperties(new Engineer());
console.log(result);