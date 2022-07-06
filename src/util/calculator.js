/**
 * Simulates a basic calculator that can perform arithmatics (+, -, *, /, ^)
 * The order of operation does not apply, i.e. 1+2*3 = 9, 1*2 +3=5, 1+2*3+4 = 13
 *
 * @param {Array<string>} input - an array of single character strings, representing key presses on a calculator, they can be numbers 0-9, +, -, *, /, ^, =
 * @returns {string} - a string representing what would be shown on the calculator screen after all key presses
 * @example
 * input: []
 * output: "0"
 *
 * input: ["1"]
 * output: "1"
 *
 * input: ["1", "1"]
 * output: "11"
 *
 * input: ["1", "1", "+"]
 * output: "11"
 *
 * input: ["1", "1", "+", "2"]
 * output: "2"
 *
 * input: ["1", "1", "+", "2" "-"]
 * output: "13"
 *
 * input: ["1", "1", "+", "2" "-", "5"]
 * output: "5"
 *
 * input: ["1", "1", "+", "2" "-", "5", "="]
 * output: "8"
 */
export default function calculate(inputs) {
  let operand = "",
    operator = "+",
    result = 0,
    // special cases for '='
    storedOperand = "",
    storedOperator = "+";
  const outputs = [];

  function appendToOperand(input) {
    if (input === ".") {
      appendDecimalToOperand();
    } else {
      operand += input;
    }
    outputs.push(operand);
  }

  function appendDecimalToOperand() {
    if (!operand.length) {
      operand = "0.";
    } else if (!operand.includes(".")) {
      operand += ".";
    }
  }

  function applyOperator(input) {
    if (input === "=") {
      operator = operator || storedOperator;
      operand = operand || storedOperand;
    }
    // only calculate the result if there is actually an operator and operand present
    if (operand.length && operator) {
      result = doArithmatic(result, operator, parseFloat(operand, 10));
      outputs.push(result.toString());
    } else {
      outputs.push(operand);
    }
    storedOperator = operator;
    storedOperand = operand || result.toString();
    operand = "";
    if (input !== "=") {
      operator = input;
    }
  }

  for (let i = 0, l = inputs.length; i < l; i++) {
    const input = inputs[i];
    // if integer or decimal append to current operand
    if (/[\d.]/.test(input)) {
      appendToOperand(input);
    }
    // else apply the next operator
    else if ("+-*/%^=".indexOf(input) !== -1) {
      // only calculate the result if there is actually an operand present
      applyOperator(input);
    }
    // otherwise do nothing and repeat the last output
    else {
      if (operand.length) {
        outputs.push(operand);
      } else {
        outputs.push(result.toString());
      }
    }
  }

  if (outputs.length) {
    return outputs[outputs.length - 1];
  }
  return "0";
}

function doArithmatic(operand1, operator, operand2) {
  return getOperatorMethod(operator)(operand1, operand2);
}

function getOperatorMethod(operator) {
  switch (operator) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "*":
      return multiply;
    case "/":
      return divide;
    case "%":
      return modulo;
    case "^":
      return Math.pow;
    default:
      return noOperation;
  }
}

function noOperation(input1, input2) {
  return input2;
}

function add(input1, input2) {
  return input1 + input2;
}

function subtract(input1, input2) {
  return input1 - input2;
}

function multiply(input1, input2) {
  return input1 * input2;
}

function divide(input1, input2) {
  return input1 / input2;
}

function modulo(input1, input2) {
  return input1 % input2;
}
