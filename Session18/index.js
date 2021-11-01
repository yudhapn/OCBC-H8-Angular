function removeSpaces(text) {
  return text.split(" ").join("");
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function updateVowels(text) {
  return text
    .split("")
    .map((x) => {
      if (x.match(/[A-Za-z]*[aeiou][A-Za-z]*/)) {
        return String.fromCharCode(x.charCodeAt() + 1);
      } 
      return x
    })
    .join("");
}

var password = "dimitri w";
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encyptedPassword = updateVowels(reversed);

console.log(noSpaces);
console.log(reversed);
console.log(encyptedPassword);
