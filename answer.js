function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

function basicOp(o, a, b) {
  return eval(a+o+b);
}

function basicOp(operation, value1, value2)
{
  return eval([value1, operation, value2].join(''));
}
