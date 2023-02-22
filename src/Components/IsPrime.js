// import React from "react";


function IsPrime(number) {
  // Check if a the number is prime
//   let number;

  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

//   //   return (
//   //     <div>

//   //     </div>
//   //   )
// }

export default IsPrime;
