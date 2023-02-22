// import React from 'react';


function GetPrime(n) {
  const primes = []; //create an empty array
  let number = 2; //starting from 2 because 1 is not a prime 

  for (let i = 0; i < n;)  {  //
    let IsPrime = true; //to check and track if the number is prime or not

    for (let i = 2; i <= Math.sqrt(number); i++) { //to check if the numbers are divisible by any number
      if (number % i === 0) { //if not a prime then false 
        IsPrime = false; 
        break;  //stop if the number is not prime
      }
    }
    if (IsPrime) {
      primes.push(number);
      i++; //to increment the count variable by 1 for each prime number 
      //found 
    }
    // If the current number is prime, add it to the array of prime numbers 
    number++;
    //and increment the count of prime numbers 
  }

  return primes; //return the array of prime numbers
}

export default GetPrime;