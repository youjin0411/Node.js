class Car {
    constructor(modelName, modelYear, type, price){
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }
    getModelName(){
        return this.modelName;
    }
    getModelYear(){
        return this.modelYear;
    }
    getType(){
        return this.type;
    }
}
let ionic = new Car("아이오닉","2021","e", 4000);
let genesis = new Car("제네시스", "2021", "g", 7000);