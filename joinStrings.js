function numberToPower(number, power){
    if (power = 0) return 1;
    let output = number
    for (let i = 0; i < power; i++) {
        output = output * number;
    }
    return output;
  }