function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let firstStudent = new Student("Ivan", "male", 12);
let secondStudent = new Student("Maria", "female", 12);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

firstStudent.setSubject("English");
secondStudent.setSubject("Biology");

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(mark);
}

firstStudent.addMark(5);
firstStudent.addMark(4);

secondStudent.addMark(3);
secondStudent.addMark(4);


Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(marks);
}

firstStudent.addMarks(4, 5);
secondStudent.addMarks(5, 3, 4);

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length == 0) {
    console.log("[getAverage]: Error: there are no marks!");
    return 0;
  }

  let average = 0;
  for (let mark of this.marks) {
    average += mark;
  }

  return average / this.marks.length
}

console.log(firstStudent.getAverage()); 
console.log(secondStudent.getAverage()); 

Student.prototype.excludeStudent = function (reason){
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

secondStudent.excludeStudent("low grades");
