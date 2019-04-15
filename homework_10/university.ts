import {Professor}from "./professors"; 

class University{

    professors:Array<Professor> = new Array();    

    constructor(public name:String,public dept:String){}
    
    public graduation(year:number):void{
        console.log(`Graduating ${this.dept}, ${year} students`)
    }

    public addProfessor(profess:Professor){
        this.professors.push(profess);
    }

    public showInfo(){
        this.graduation(2019);

        for (const prof of this.professors) {
            console.log(prof.toString());            
        }


    }
}

let university:University = new University("MUM","Computer Science");
university.addProfessor(new Professor("Michel","WAA"));

university.showInfo();




