const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date == null) {
        return ('Unable to determine the time of year!')
    }
    else {
    let year = date.getFullYear()
    let winter1 = new Date(year, 0, 1)
    let winter2 = new Date(year, 2, 1)
    let spring1 = new Date(year, 2, 1)
    let spring2 = new Date(year, 5, 1)
    let summer1 = new Date(year, 5, 1)
    let summer2 = new Date(year, 8, 1)
    let autumn1 = new Date(year, 8, 1)
    let autumn2 = new Date(year, 11, 1)
    let winter3 = new Date(year, 11, 1)
    let winter4 = new Date(year, 11, 31, 23, 59, 59, 59)
    if (date.getTime() >= winter1.getTime() && date.getTime() < winter2.getTime()){
      return ('winter')
    } else if (date.getTime() >= spring1.getTime() && date.getTime() < spring2.getTime()){
        return ('spring')
    } else if (date.getTime() >= summer1.getTime() && date.getTime() < summer2.getTime()){
        return ('summer')
    } else if (date.getTime() >= autumn1.getTime() && date.getTime() < autumn2.getTime()){
        return ('autumn')
    } else if (date.getTime() >= winter3.getTime() && date.getTime() <= winter4.getTime()){
        return ('winter')
    }  else {
        return ('Unable to determine the time of year!')
    }
    }

};
