const income = document.querySelector("#income span");
const expense = document.querySelector("#expense span");
const balance = document.querySelector("#balance span");

const amount = document.querySelector("#amount");

const transactions = document.querySelector("#transactions");
const addtransactions = document.querySelector("#addtransactions");

let newIncome = 0;
let newExpense = 0;
let newBalance = 0;

addtransactions.addEventListener("click", (e) => {
  e.preventDefault();

  const amountValue = parseFloat(amount.value);
  const transactionType = transactions.value;

  if (isNaN(amountValue) || amountValue <= 0) {
    alert("Please enter valid number");
    return;
  }

  if (transactionType === "income") {
    newIncome += amountValue
    newBalance += amountValue
  } else if(transactionType === "expense") {
    newExpense += amountValue
    newBalance -= amountValue
  }
  amount.value = ""

  income.textContent = `Rs${newIncome}`
  expense.textContent = `Rs${newExpense}`
  balance.textContent = `Rs${newBalance}`

});
