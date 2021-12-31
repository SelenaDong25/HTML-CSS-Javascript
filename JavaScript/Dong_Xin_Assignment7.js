/*The Program Written by Xin Dong, Nov. 20, 2019*/

// declare constant rate
const annualInterestRate = 0.12;
const monthlyIntrestRate = 0.12/12;
const monthlyPaymentRate = 0.2; // monthly minimum payment is 20% of outstanding of every month
// declare array to store credit card charge for every month
let monthlySpend = [{month:'Jan',spend:800.11},{month:'Feb',spend:855.23},{month:'Mar',spend:798.67},{month:'Apr',spend:855.35},
                    {month:'May',spend:779.3},{month:'Jun',spend:775.3},{month:'Jul',spend:900.11},{month:'Aug',spend:920},
                    {month:'Sep',spend:768.46},{month:'Oct',spend:689.78},{month:'Nov',spend:879.8},{month:'Dec',spend:950.5}];
// create array to hold accumulated balance of each month                    
let balance = [];
// variable to store monthly outstanding amount, which is "previous balance + current card charge"
let monthlyBalance = 0;
// retrive credit card charge value for each month
let spen = monthlySpend.map(a => a.spend);
// calculate accumulated each month balance and store in array
for(let i = 0; i < spen.length; i++){    
    monthlyBalance = (parseFloat(spen[i]) + monthlyBalance) * (1-monthlyPaymentRate) * (1 + monthlyIntrestRate);
    balance.push(monthlyBalance);
}
// The last month balance is the annual remain balance, pop to get this number and round to 2 decimal places
console.log("Annual remaining balance is " + "$" + Math.round(balance.pop()*100)/100);


