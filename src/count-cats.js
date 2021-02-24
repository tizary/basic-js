const CustomError = require("../extensions/custom-error");

module.exports = function countCats(count) {
//  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if ( count !== null) {
    let result = 0
      for (let i = 0; i < count.length; i++) {
        for (let k=0; k<count[i].length; k++) {
          if (count[i][k] == '^^') {
           result += 1
          }
        }
      }
      return result
      }

      else {
         return 0
      }
};
