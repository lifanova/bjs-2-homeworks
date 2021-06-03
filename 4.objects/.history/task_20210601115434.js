function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  for(let mark of marks) {
    this.marks.push(mark);
  }  
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length == 0) {
    console.log("[getAverage]: Error: there are no marks!");
    return 0;
  }

  let average = 0;
  for (let mark of this.marks) {
    average += mark;    
  }

  console.log(average);
  return average / this.marks.length
}

Student.prototype.excludeStudent = function (reason){
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

let firstStudent = new Student("Ivan", "male", 12);
firstStudent.setSubject("English");
firstStudent.addMark(5);
firstStudent.addMark(4);
firstStudent.addMarks(4, 5);
console.log(firstStudent);
console.log(firstStudent.getAverage()); 

let secondStudent = new Student("Maria", "female", 12);
secondStudent.setSubject("Biology");
secondStudent.addMark(3);
secondStudent.addMark(4);
secondStudent.addMarks(5, 3, 4);
console.log(secondStudent.getAverage()); 
secondStudent.excludeStudent("low grades");
console.log(secondStudent);
