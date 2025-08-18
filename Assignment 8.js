//problem 1

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return reversed;
}

//problem 2

function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
}

//problem 3

function isPalindrome(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }

  if (reversed === string) {
    return true;
  } else {
    return false;
  }
}

//problem 4

function findLargeNumber(array) {
  if (array.length === 0) {
    return null;
  }

  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

// problem 5

function removeDuplicate(array) {
  let unique = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === current) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(current);
    }
  }

  return unique;
}

//problem 6

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }
  return sum;
}

//problem 7

function getEvenNumber(array) {
  let evenNumber = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumber.push(array[i]);
    }
  }
  return evenNumber;
}

//problem 8

function capitalizeWord(string) {
  let words = string.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      const capitalized = word[0].toUpperCase() + word.slice(1);
      result.push(capitalized);
    }
  }

  return result.join(' ')
}


//problem  9

function frational(number) {
    if(number < 0) {
        return null
    }

    let result = 1;

    for(let i = 1; i <= number; i++){
        result = result * i
    }
    return result
}

//problem 10

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } 
    else if (i % 3 === 0) {
      console.log("Ping");
    } 
    else if (i % 5 === 0) {
      console.log("Pong");
    } 
    else {
      console.log(i);
    }
  }
}

