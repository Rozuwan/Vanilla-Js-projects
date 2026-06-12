const income = document.querySelector("#income span");
const expense = document.querySelector("#expense span");
const balance = document.querySelector("#balance span");
const amount = document.querySelector("#amount");
const time = document.querySelector("#time");
const transactions = document.querySelector("#transactions");
const addtransactions = document.querySelector("#addtransactions");

let totalIncome = 0;
let totalExpense = 0;
let totalBalance = 0;

addtransactions.addEventListener("click", (e) => {
  e.preventDefault();
  
  const transactionAmt = parseFloat(amount.value);
  const transactionType = (transactions.value);

  if (isNaN(transactionAmt) || transactionAmt <= 0) {
    alert("Please enter valid number");
    return;
  }
  if (transactionType === "income") {
    totalIncome += transactionAmt;
    totalBalance += transactionAmt;
  } else if (transactionType === "expense") {
    totalExpense += transactionAmt;
    totalBalance -= transactionAmt;
  }

  updateUI();
});

function updateUI() {
  income.textContent = `Rs${totalIncome}`;
  expense.textContent = `Rs${totalExpense}`;
  balance.textContent = `Rs${totalBalance}`;
}
