class EletricCar extends Car{
    constructor(modelName, modelYear, price, chargeTime){
        super(modelName, modelYear, "e", price);
        this.chargeTime = chargeTime;
    }

    setChargeTime(time){
        this.chargeTime = time;
    }

    getChargeTime(){
        return this.chargeTime;
    }
}