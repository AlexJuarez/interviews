const evalRPN = function(tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    switch (token) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        stack.push(-stack.pop() + stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        stack.push(1 / stack.pop() * stack.pop());
        break;
      default:
        stack.push(parseInt(token, 10));
    }
  }

  return Math.round(stack[0]);
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));

//console.log(evalRPN(["4", "13", "5", "/", "+"]));
