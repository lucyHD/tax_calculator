let TaxCalculator = class TaxCalculator {
  constructor(year) {
    if (year === undefined) {
      let date = new Date();
      this.year = date.getFullYear();
    } else {
      this.year = year;
    }
  }

  getYear() {
    return this.year;
  }

  calculateTax({co2Emissions}) {
    let taxprice;
    if(co2Emissions == 0){
      taxprice = 0; 
    }
    else if(co2Emissions <=50){
      taxprice = 10;
    }
    else if(co2Emissions <=75){
      taxprice = 25;
    }
    else if(co2Emissions <=90){
      taxprice = 105;
    }
    else if(co2Emissions <=100){
      taxprice = 125;
    }
    else if(co2Emissions <=110){
      taxprice = 145;
    }
    else if(co2Emissions <=130){
      taxprice = 165;
    }
    else if(co2Emissions <=150){
      taxprice = 205;
    }
    else if(co2Emissions <=170){
      taxprice = 515;
    }
    else if(co2Emissions <=190){
      taxprice = 830;
    }
    else if(co2Emissions <=225){
      taxprice = 1240;
    }
    else if(co2Emissions <=255){
      taxprice = 1760;
    }
    else if(co2Emissions > 255){
      taxprice = 2070;
    }

    return taxprice;
  }

}

module.exports = { TaxCalculator: TaxCalculator }