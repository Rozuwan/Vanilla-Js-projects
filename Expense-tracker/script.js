// selecting income expense and balance 
const income = document.querySelector("#income span");
const expense = document.querySelector("#expense span");
const balance = document.querySelector("#balance span");
//  selecting amount field
const amount = document.querySelector("#amount");
// transaction btn and  transaction types
const transactions = document.querySelector("#transactions");
const addtransactions = document.querySelector("#addtransactions");

// select description
const description = document.querySelector("#description");
// select date
const dateDetails = document.querySelector("#date");
// transaction history=> list selection
const transactionlist = document.querySelector(".transaction-list");
// starting from 0 for calculating calculations
let newIncome = 0;
let newExpense = 0;
let newBalance = 0;

addtransactions.addEventListener("click", (e) => {
  e.preventDefault();
// calculations part
  const amountValue = parseFloat(amount.value);
  const transactionType = transactions.value;

  if (isNaN(amountValue) || amountValue <= 0) {
    alert("Please enter valid number");
    return;
  }

  if (transactionType === "income") {
    newIncome += amountValue;
    newBalance += amountValue;
  } else if (transactionType === "expense") {
    newExpense += amountValue;
    newBalance -= amountValue;
  }

  income.textContent = `Rs${newIncome}`;
  expense.textContent = `Rs${newExpense}`;
  balance.textContent = `Rs${newBalance}`;

  // value of description section and date section
  const descriptionValue = description.value;
  const dateValue = dateDetails.value;

  // create transaction history via createElement
  const transactionContainer = document.createElement("div");
  transactionContainer.classList.add("transaction-list");

  const transactionDesc = document.createElement("div");
  transactionDesc.classList.add("transaction-desc");
  if (transactionType === "income") {
    // style color
    transactionContainer.style.backgroundColor = "AliceBlue";
  } else {
    transactionContainer.style.backgroundColor = "MistyRose";
  }
  const title = document.createElement("h3");
  title.innerHTML = `${descriptionValue} - <span>Rs${amountValue}</span>`;
  if (descriptionValue === "") {
    alert("Please enter description");
    return;
  }
  const date = document.createElement("p");
  date.textContent = `${dateValue}`;
  if (dateValue === "") {
    alert("Please enter date");
    return;
  }
  transactionDesc.append(title, date);

  // delete btn inside transaction-history
  const deletebtnDiv = document.createElement("div");
  deletebtnDiv.id = "delete-btn";

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "remove";

  deletebtn.addEventListener("click", () => {
    transactionContainer.remove();
  });
  deletebtnDiv.append(deletebtn);

  transactionContainer.append(transactionDesc, deletebtnDiv);

// adding to the transaction-history div
  const transactionHistory = document.querySelector(".transaction-history");
  transactionHistory.append(transactionContainer);

  // resetting value
  amount.value = "";
  description.value = "";
  dateDetails.value = "";
});
