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