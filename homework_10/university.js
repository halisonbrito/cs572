"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professors_1 = require("./professors");
class University {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
        this.professors = new Array();
    }
    graduation(year) {
        console.log(`Graduating ${this.dept}, ${year} students`);
    }
    addProfessor(profess) {
        this.professors.push(profess);
    }
    showInfo() {
        this.graduation(2019);
        for (const prof of this.professors) {
            console.log(prof.toString());
        }
    }
}
let university = new University("MUM", "Computer Science");
university.addProfessor(new professors_1.Professor("Michel", "WAA"));
university.showInfo();
