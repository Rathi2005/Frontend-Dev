class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const avg = this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
        return avg;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }
}

let s1 = new Student("Akshat", [90, 88, 92]);
let s2 = new Student("Sujal", [70, 75, 80]);
let s3 = new Student("Dhruv", [45, 50, 40]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
