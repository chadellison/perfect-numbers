class PerfectNumbers {
  classify(num) {
    let count = num / 2;
    let sumOfFactors = 0;
    if(num <= 0) {
      return "Classification is only possible for natural numbers.";
    }

    for(let i = 1; i <= count; i++) {
      if(num % i === 0) {
        sumOfFactors += i;
      }
    }

    if(sumOfFactors === num) {
      return "perfect";
    }
    else if(sumOfFactors > num) {
      return "abundant";
    }
    else {
      return "deficient";
    }
  }
}

module.exports = PerfectNumbers;
