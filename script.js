class Person {
    constructor(name, age) {
        this._name = name; // Use a private field to store the name
        this._age = age; // Use a private field to store the age
    }

    // Getter for the name
    get name() {
        return this._name;
    }

    // Setter for the age
    set age(age) {
        if (age < 0) {
            console.log("Age must be a positive number");
        } else {
            this._age = age;
        }
    }

    // Optional getter for age
    get age() {
        return this._age;
    }
}

class Student extends Person {
    // Method specific to Student
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    // Method specific to Teacher
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
