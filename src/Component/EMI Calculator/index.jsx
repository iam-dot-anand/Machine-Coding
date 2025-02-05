import React, { useState } from "react";
import "./index.css";

const EMICalculator = () => {
  const [data, setData] = useState({
    principle: "",
    interest: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(name, value);
  };
  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("data", data);
  };

  // EMI Formula = (P X R/12) X [(1+R/12) ^N] / [(1+R/12) ^N-1]
  const p = data.principle; //amount
  const r = data.interest / 100; //interest rate
  const n = data.year * 12; //time-period

  let emiResult;
  if (data.principle && data.interest && data.year) {
    const monthlyInterest = r / 12;
    const numerator = p * monthlyInterest * Math.pow(1 + monthlyInterest, n);
    const denominator = Math.pow(1 + monthlyInterest, n) - 1;
    emiResult = numerator / denominator;
  }
  console.log(emiResult);

  return (
    <div className="conatainer">
      <div className="heading">
        <h1>EMI Calculator</h1>
      </div>
      <div className="emi-calculator">
        <form onSubmit={handleCalculate} className="form">
          <label>Principle</label>
          <input
            type="text"
            name="principle"
            value={data.principle}
            onChange={handleChange}
          />
          <label>Interest</label>
          <input
            type="text"
            name="interest"
            value={data.interest}
            onChange={handleChange}
          />
          <label>Year</label>
          <input
            type="text"
            name="year"
            value={data.year}
            onChange={handleChange}
          />
          <button type="submit">Calculate</button>
        </form>
        <p>emi:{Math.ceil(emiResult)}</p>
      </div>
    </div>
  );
};
export default EMICalculator;
