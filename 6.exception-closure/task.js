// Task 1
function parseCount(param) {
    const errorMsg = "Невалидное значение"

    let result = Number.parseInt(param);

    if (Number.isNaN(result)) {
        throw new Error(errorMsg);
    }

    return result;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (e) {
        console.error(e.message);
        return e;
    }
}

// Task 2
class Triangle {
    constructor(a, b, c) {
        const errorMsg = "Треугольник с такими сторонами не существует";
        if (a + b > c && b + c > a && a + c > b) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new Error(errorMsg);
        }

    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        return new Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    const errorMsg = "Ошибка! Треугольник не существует";

    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea() {
                return errorMsg;
            },

            getPerimeter() {
                return errorMsg;
            }

        };
    }

}