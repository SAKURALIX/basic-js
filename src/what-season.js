const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // try {
  //   getSeason();
  // } 
  // catch (err) {
  //   throw new Error("Invalid date!");
  // }



  let season;
  if(date===undefined) {season = 'Unable to determine the time of year!'
  } else if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  } else if (Object.getOwnPropertyNames(date).length>0) {
    throw new Error("Invalid date!");
  } else {
    let month = date.getMonth() + 1;
    if(month===12) {season = 'winter'}
    if(month>0 && month<3) {season = 'winter'}
    if(month>2 && month<6) {season = 'spring'}
    if(month>5 && month<9) {season = 'summer'}
    if(month>8 && month<12) {season = 'fall'}
  }

  return season
}

module.exports = {
  getSeason
};
