let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendDecimal() {
  const currentResult = document.getElementById('result').value;
  if (!currentResult.includes('.')) {
    document.getElementById('result').value += '.';
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function setOperator(op) {
  operator = op;
  operand1 = document.getElementById('result').value;
  clearResult();
}

function calculate() {
  operand2 = document.getElementById('result').value;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = 'Error';
  }
  document.getElementById('result').value = result;
}


  