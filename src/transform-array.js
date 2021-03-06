const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new RangeError()
  } else {
    let trans = [];
    for (let i=0; i<arr.length; i++){
      trans.push(arr[i]);
      switch(arr[i]) {
        case '--discard-next':
          i = i+1;
          break;
        case '--discard-prev':
          trans.pop();
          trans.pop();
          break;
        case '--double-next':
          trans.push(arr[i+1]);
          break;
        case '--double-prev':
          if (arr[i-2] !== '--discard-next') {
            trans.push(arr[i - 1]);
          }
          break;
      }
    }
    let result =[];
    trans.forEach(el => {
      if (el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev' && el !== undefined && el !== [undefined]) {
        result.push(el);
      }
    });
    return result;
  }
};
