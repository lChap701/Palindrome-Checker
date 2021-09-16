function palindrome(str) {
  let org = str.replace(/\W|_/g, "").toUpperCase();
  let rev = org.split("").reverse().join("");

  return rev === org;
}

console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));