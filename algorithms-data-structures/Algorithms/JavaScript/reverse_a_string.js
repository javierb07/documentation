/*
  From Data Structures + Algorithms by Andrei Neagoie
*/

function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

const string = "Timbits Hi";
console.log(`Reversing string: ${string}`);
console.log(reverse(string));
console.log(reverse2(string));
console.log(reverse3(string));
