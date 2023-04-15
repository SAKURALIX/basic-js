const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let addition;
  if(options.addition===null) {addition = 'null' }
  if(options.addition===undefined) {addition = '' }
  else {addition = options.addition }

  let separator = options.separator ?? '+';
  let additionSeparator = options.additionSeparator ?? '|';
  let additionString = '';
  let repeatedString = '';

  for(let i=0; i<options.additionRepeatTimes-1; i++) {
    additionString = additionString + addition + additionSeparator;
  }

  additionString = additionString + addition

  for(let i=0; i<options.repeatTimes-1; i++) {
    repeatedString = repeatedString + str + additionString + separator;
  }

  repeatedString = repeatedString + str + additionString

  return repeatedString
}

module.exports = {
  repeater
};
