const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let dreamTeamName = '';
  if(!Array.isArray(members)) {return dreamTeamName = false}
  else {
      
      let arr2 = [];
      for (let i = 0; i < members.length; i++) {
        if(typeof members[i] === 'string') {
          let newString = members[i].replace(/ /g,'').toUpperCase();
          arr2.push(newString)
        }
      }
  
      let sortedMembers = arr2.sort();
    
      for (let i = 0; i < sortedMembers.length; i++) {
          dreamTeamName = dreamTeamName + sortedMembers[i][0];
      }

  }


  return dreamTeamName
}
console.log(createDreamTeam(['    Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']))
// 'AABDEEGKPP'

module.exports = {
  createDreamTeam
};
