/*
  From Data Structures + Algorithms by Andrei Neagoie
*/

/*
  Given an array = [2,5,1,2,3,5,1,2,4]:
  It should return 2

  Given an array = [2,1,1,2,3,5,1,2,4]:
  It should return 1

  Given an array = [2,3,4,5]:
  It should return undefined
*/

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}
function firstRecurringCharacter3(arr) {
  let hash = {
    seenChars: {},
  };
  let item;
  for (let i = 0; i < arr.length; i++) {
    item = arr[i];
    if (hash[item] === undefined) {
      hash[item] = i;
      hash["seenChars"][item] = item;
    } else {
      if (hash["firstSol"] === undefined) {
        hash["firstSol"] = item;
        delete hash["seenChars"][hash["firstSol"]];
      }
      if (hash["seenChars"][item] !== undefined) {
        return hash["seenChars"][item];
      }
    }
  }
  return hash["firstSol"];
}

console.log(firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]));
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//Bonus... What if we had this:
// return 5 because the pairs are before 2,2
console.log(firstRecurringCharacter3([2, 5, 5, 2, 3, 5, 1, 2, 4]));
