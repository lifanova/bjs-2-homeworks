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
firstStudent.addMark(5);

secondStudent.addMark(3);
secondStudent.addMark(4);
secondStudent.addMark(5);

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(marks);
}

