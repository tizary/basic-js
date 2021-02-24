const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
let arr = []
    for (let i=0; i<members.length; i++){
      if (typeof members[i] === "string") {
  arr.push(members[i].trim().charAt(0).toUpperCase())
      }
    }
  return arr.sort().join('')
  }




};
