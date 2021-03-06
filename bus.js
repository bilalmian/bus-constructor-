var Student = require("./student.js")

var Bus = function (driverName, color, gas){

	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
		this.studentsOnTheBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase))
	}
	this.busChatter = function(){
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			console.log(this.studentsOnTheBus[i].catchPhrase);
		}
	}
}

module.exports = Bus;