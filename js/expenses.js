// Add event listener in the calculate button

document.getElementById("calculate-btn").addEventListener("click", function () {


  // get Income field
  const incomeField = document.getElementById("income-field");
  const incomeFieldString = incomeField.value;
  const incomeFieldValue = parseInt(incomeFieldString);

  // validate income input
//   if (
//     isNaN(incomeFieldValue) ||
//     incomeFieldValue <= 0 ||
//     incomeFieldString.trim() === ""
//   ) {
//     alert("Please enter a valid positive number for income");
//     incomeField.value = "";
//     return;
//   }




  // get food field
  const foodField = document.getElementById("food-field");
  const foodFieldString = foodField.value;
  const foodFieldValue = parseInt(foodFieldString);

  // validate food input
//   if (
//     isNaN(foodFieldValue) ||
//     foodFieldValue < 0 ||
//     foodFieldString.trim() === ""
//   ) {
//     alert("Please enter a valid positive number or zero for food expenses");
//     foodField.value = "";
//     return;
//   }



  // get rent field
  const rentField = document.getElementById("rent-field");
  const rentFieldString = rentField.value;
  const rentFieldValue = parseInt(rentFieldString);

  // validate rent input
//   if (
//     isNaN(rentFieldValue) ||
//     rentFieldValue < 0 ||
//     rentFieldString.trim() === ""
//   ) {
//     alert("Please enter a valid positive number or zero for rent expenses");
//     rentField.value = "";
//     return;
//   }



  // get clothes field
  const clothesField = document.getElementById("clothes-field");
  const clothesFieldString = clothesField.value;
  const clothesFieldValue = parseInt(clothesFieldString);

  // validate clothes input
//   if (
//     isNaN(clothesFieldValue) ||
//     clothesFieldValue < 0 ||
//     clothesFieldString.trim() === ""
//   ) {
//     alert("Please enter a valid positive number or zero for clothing expenses");
//     clothesField.value = "";
//     return;
//   }



  // Expenses element
  const expnessesTotal = document.getElementById("expenses-total");
  const expnessesTotalString = expnessesTotal.innerText;
  const expnessesTotalValue = parseInt(expnessesTotalString);


  // Total expenses calculation
  const totalExpenses = foodFieldValue + rentFieldValue + clothesFieldValue;
  const totalExpensesValue = totalExpenses + expnessesTotalValue;

  expnessesTotal.innerText = totalExpensesValue;



  // main balance calculation

  const getMainBalance = incomeFieldValue - totalExpensesValue;


  // Main balance

  const mainBalance = document.getElementById('main-balance');
  const mainBalanceString = mainBalance.innerText;
  const mainBalanceValue = parseInt(mainBalanceString);


  //get main balance 

  const totalMianBalance = mainBalanceValue + getMainBalance;

  mainBalance.innerText = totalMianBalance;

});





// Add event listener in the calculate button

document.getElementById('save-btn').addEventListener('click', function () {

      // get Income field
  const incomeField = document.getElementById("income-field");
  const incomeFieldString = incomeField.value;
  const incomeFieldValue = parseInt(incomeFieldString);

  // get saving%

  const savingField = document.getElementById('saving-field');
  const savingFieldString = savingField.value;
  const savingFieldValue = parseFloat (savingFieldString);


  // convert savings

  const savings = incomeFieldValue * (savingFieldValue / 100);


  // get saving total element
  
  const totalSaving = document.getElementById('total-savings');
  const totalSavingString = totalSaving.innerText;
  const totalSavingValue = parseInt (totalSavingString);

  const totalSavingsInIncome = savings + totalSavingValue;

  totalSaving.innerText = totalSavingsInIncome;  // Total saving





  // Set Remaining Balance


  // get main balance for set remaining balance

  const mainBalance = document.getElementById('main-balance');
  const mainBalanceString = mainBalance.innerText;
  const mainBalanceValue = parseInt(mainBalanceString);


  // remaining balance 

  const remainingBalance = mainBalanceValue - totalSavingsInIncome;

  

  // get remaining balance

  const remainingBalanceElement = document.getElementById('remaining-balance');
  const remainingBalanceElementString = remainingBalanceElement.innerText;
  const remainingBalanceElementValue = parseInt(remainingBalanceElementString);

  const totalRemainingBalance = remainingBalanceElementValue + remainingBalance;

  remainingBalanceElement.innerText = totalRemainingBalance;

})