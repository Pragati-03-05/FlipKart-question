//FliptKart asked interview question
let obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};
const Fn = (obj) => {
  return function (...args) {
    for (let i in obj) {
      if (typeof obj[i] === 'function') {
        obj[i] = obj[i](...args);
      } else if (obj[i] && typeof obj[i] === 'object') {
        Fn(obj[i])(...args);
      }
    }
  };
};
Fn(obj)(1, 1, 1);
console.log('2222222222222222222', obj);
