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

