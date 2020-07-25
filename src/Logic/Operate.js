import splitMulti from './SplitMultiple';
const math = require('mathjs');

function isNumber(item) {
  return /[0-9]+/.test(item);
}

const isOperand = (btnName) => {
  let res;
  switch (btnName) {
    case "+":
    case "-":
    case "*":
    case "/":
      res = true;
      break;

    default:
      res = false;
      break;
  }

  return res;
};

const operate = (obj, btnName) => {
  if (btnName === "AC") {
    return {
      expr: "",
      lastPressed: "",
      lastExpr: ''
    };
  };

  if(btnName === '='){
      const result = math.evaluate(obj.expr);
      if(obj.expr !== ''){
          return {
              lastExpr : obj.expr,
              expr : result.toString()
          }
      }
  }

  if (isNumber(btnName)) {
    return {
      expr: obj.expr + btnName,
      lastPressed: btnName,
    };
  }

  if(isOperand(btnName)){
      if (isOperand(obj.lastPressed)) {
          return {}
      }

      return {
          expr: obj.expr + btnName,
          lastPressed: btnName
      }
  }

  if(btnName === '.'){
    let numberArr = splitMulti(obj.expr, ['+','-','*','/']);
    if(obj.expr === ''){
      return {
        expr: '0.',
        lastPressed: btnName
      }
    }

    if(!numberArr[numberArr.length - 1].includes('.')){
      return {
        expr: obj.expr + '.',
        lastPressed: btnName
      }
    }else {
      return {};
    }

  }
};

export default operate;
