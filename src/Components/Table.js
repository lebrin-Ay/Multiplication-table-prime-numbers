import React from "react";
import GetPrime from "./GetPrime";
import '../App.css';

function Table() {
  // generates an array of the first 10 prime numbers
    const primes = GetPrime(10);
  
  // generate the rows of the table with map function 
    const table = primes.map((tableRow) => (
      //create a tr data and set the key to table row which is the prime number
      <tr key={tableRow}>
      <th>{tableRow}</th>
      {/* generate the cells data by multiplying the row and column cells */}
        {primes.map((tableColumn) => (
          <td key = {`${tableRow}-${tableColumn}`}>{tableRow * tableColumn}</td>
        ))}
      </tr>
    ));

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th></th>
          {primes.map((prime) => (
            <th key={prime}>{prime}</th>
          ))}
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
}
  

  export default Table;
  