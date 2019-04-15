export class Professor{

    constructor(public name:String, degree:String  ){

    }

    public toString():String{
        return `Professor ${this.name}`;
    }

}

