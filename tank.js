class tank {
    constructor (volMin,volMax,psiMax) {
        this.id = null;
        this.volMin = volMin;
        this.volMax = volMax;
        this.psiMax = psiMax;
    }
}

  const tank1 = new tank(100,1100, 30);
  tank1.id =5;
  console.log(tank1);