const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new RangeError()
  } else if (arr[0] === '--double-prev' ||
  arr[0] === '--double-next' ||
  arr[0] === '--discard-prev' ||
  arr[0] === '--discard-next' &&
  arr.length === 1) {
    return []
  }
   else {
    let trans = []
    for (let i=0; i<arr.length; i++){
       if (arr[i] === '--discard-next' ) {
i = i + 2
} else if (arr[i] === '--discard-prev' ) {
trans = trans.filter(item => item !== trans[i-1])
  i = i+1
} else if (arr[i] === '--double-next') {
trans = trans.concat(arr[i+1])
i = i+1
} else if (arr[i] === '--double-prev' ) {
  trans = trans.concat(arr[i-1])
  i = i+1
}
trans.push(arr[i])

    }
  //  console.log(arr)
    return trans

  }
};
