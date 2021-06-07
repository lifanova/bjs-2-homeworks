class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;

        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(curState) {
        if (curState < 0) {
            this._state = 0;
        } else if (curState > 100) {
            this._state = 100
        } else {
            this._state = curState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Example 
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


// Task 2 

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {

        for (let book of this.books) {
            if (book[type] == value) {
                return book;
            }
        }

        return null;
    }

    giveBookByName(bookName) {
        if (bookName == null || bookName == "") {
            console.error("[giveBookByName]: error: пустое название книги!");
            return null;
        }

        for (let i in this.books) {
            if (this.books[i].name == bookName) {
                //array            
                let result = this.books.splice(i, 1);
                return result[0];
            }
        }

        return null;
    }
}


// Example
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1919, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1919).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Example
let curBook = new Book("Карл Маркс", "Капитал", 1919, 168);
library.giveBookByName("Капитал");
console.log("Количество книг после выдачи: " + library.books.length);
// Портим книгу
curBook.state = 25;
//Чиним книгу
curBook.fix();
console.log(curBook.state);
// Возвращаем в библиотеку
library.addBook(curBook);
console.log("Количество книг после выдачи: " + library.books.length);


// Task 3

class StudentLog {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;

        //массив объектов вида предмет => оценки
        this.classJournal = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade < 1 || grade > 5) {
            console.error("[addGrade]: error: неверная оценка!");
            return;
        }

        if (this.classJournal[subject] == undefined) {
            this.classJournal[subject] = [];
        }

        this.classJournal[subject].push(grade);
    }

    getAverageBySubject(subjectName) {
        let average = 0;

        let subjectMarks = this.classJournal[subjectName];

        if (subjectMarks.length == 0) {
            console.error("[getAverageBySubject]: error: по этому предмету нет оценок!");
            return 0;
        }

        for (let mark of subjectMarks) {
            average += mark;
        }

        return average / subjectMarks.length;
    }

    getTotalAverage() {
        let keys = Object.keys(this.classJournal);

        if (keys == undefined) {
            console.error("[getTotalAverage]: error: журнал пуст!");
            return 0;
        }

        let total = 0;
        for (let curKey of keys) {
            total += this.getAverageBySubject(curKey);
        }

        return total / keys.length;
    }
}

