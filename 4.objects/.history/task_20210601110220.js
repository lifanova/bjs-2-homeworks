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

