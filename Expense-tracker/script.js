const income = document.querySelector("#income span");
const expense = document.querySelector("#expense span");
const balance = document.querySelector("#balance span");

const amount = document.querySelector("#amount");

const transactions = document.querySelector("#transactions");
const addtransactions = document.querySelector("#addtransactions");

const description = document.querySelector("#description");

const dateDetails = document.querySelector("#date");

const transactionlist = document.querySelector(".transaction-list");

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
    newIncome += amountValue;
    newBalance += amountValue;
  } else if (transactionType === "expense") {
    newExpense += amountValue;
    newBalance -= amountValue;
  }

  income.textContent = `Rs${newIncome}`;
  expense.textContent = `Rs${newExpense}`;
  balance.textContent = `Rs${newBalance}`;

  const descriptionValue = description.value;
  const dateValue = dateDetails.value;

  const transactionContainer = document.createElement("div");
  transactionContainer.classList.add("transaction-list");

  const transactionDesc = document.createElement("div");
  transactionDesc.classList.add("transaction-desc");
  if (transactionType === "income") {
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

  const deletebtnDiv = document.createElement("div");
  deletebtnDiv.id = "delete-btn";

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "remove";

  deletebtn.addEventListener("click", () => {
    transactionContainer.remove();
  });
  deletebtnDiv.append(deletebtn);

  transactionContainer.append(transactionDesc, deletebtnDiv);

  const transactionHistory = document.querySelector(".transaction-history");
  transactionHistory.append(transactionContainer);

  amount.value = "";
  description.value = "";
  dateDetails.value = "";
});
