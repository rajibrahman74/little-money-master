// Common function get input value by  input id

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldString);

  return inputFieldValue;
}



// Common function get text element by id

function getTextElementValue(elementId) {
  const textElements = document.getElementById(elementId);
  const elementString = textElements.innerText;
  const elementValue = parseFloat(elementString);

  return elementValue;
}




// Expensses total and main balance calculate button addd event handller

document.getElementById("calculate-btn").addEventListener("click", function () {

  const incomeField = getInputValue("income-field");

  const foodField = getInputValue("food-field");

  const rentField = getInputValue("rent-field");

  const clothesField = getInputValue("clothes-field");



  // validation for all here input fields together

  if (
    isNaN(incomeField) ||
    isNaN(foodField) ||
    isNaN(rentField) ||
    isNaN(clothesField) ||
    incomeField < 0 ||
    foodField < 0 ||
    rentField < 0 ||
    clothesField < 0
  ) {
    alert("Please enter valid input for all fields");
    return;
  }


  // get total expensses

  const totalExpenses = foodField + rentField + clothesField;


  // validation,if total expensse getter then income

  if (totalExpenses > incomeField) {
    alert("You don't have enough income");
    return;
  }

  const totalExpensesElement = document.getElementById("expenses-total");
  totalExpensesElement.innerText = totalExpenses;

  // main balance

  const mainBalanceElement = document.getElementById("main-balance");
  const mainBalanceTotal = incomeField - totalExpenses;
  mainBalanceElement.innerText = mainBalanceTotal;
});






// save button add event handller

document.getElementById("save-btn").addEventListener("click", function () {


  const incomeField = getInputValue("income-field");

  const savingField = getInputValue("saving-field");

  // Validation for income field and saving field

  if (
    isNaN(incomeField) ||
    isNaN(savingField) ||
    incomeField < 0 ||
    savingField < 0
  ) {
    alert("Please enter valid input for all fields");
    return;
  }


  // savings calculation

  const totalSaving = incomeField * (savingField / 100);

  if (savingField > 100) {
    alert("You Don't save getter then 100%");
    return;
  }



  // total savings in income

  const totalSavingElement = document.getElementById("total-savings");
  totalSavingElement.innerText = totalSaving;

  const remainingBalance = document.getElementById("remaining-balance");

  const totalExpenses = getTextElementValue("expenses-total");

  const totalSavings = getTextElementValue("total-savings");

  const totalCost = totalExpenses + totalSavings;

  const remainingTotal = incomeField - totalCost;

  remainingBalance.innerText = remainingTotal;
});
