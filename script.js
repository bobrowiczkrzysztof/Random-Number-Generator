// Constants
const minNumber = 1;
const maxNumber = 100;
const numberOfChoices = 10;

// Function that activates the program
const clickMe = () => {
  const oddArray = [];
  const evenArray = [];
  const evenNumbersClass = document.querySelectorAll('.even-number');
  const oddNumbersClass = document.querySelectorAll('.odd-number');

  // Pushing even numbers into an array
  let i = 0;
  while (i < numberOfChoices) {
    let evenNumbers = (evenNumbersClass[i] =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    if (evenNumbers % 2 !== 0 || evenArray.includes(evenNumbers)) {
      i--;
    } else {
      evenArray.push(evenNumbers);
    }
    i++;
  }
  // Pushing odd numbers into an array
  let y = 0;
  while (y < numberOfChoices) {
    let oddNumbers = (oddNumbersClass[y] =
      // Randomization
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    if (oddNumbers % 2 === 0 || oddArray.includes(oddNumbers)) {
      y--;
    } else {
      oddArray.push(oddNumbers);
    }
    y++;
  }
  // Sorting even numbers
  evenArray.sort(function (a, b) {
    return a - b;
  });
  // Sorting odd numbers
  oddArray.sort(function (a, b) {
    return a - b;
  });
  // Span text informing where are the even and odd numbers
  document.getElementById('even-text').innerHTML = 'Even';
  document.getElementById('odd-text').innerHTML = 'Odd';
  // For loop that takes random numbers and place them into the DOM
  for (let i = 0; i < evenArray.length; i++) {
    evenNumbersClass[i].innerHTML = evenArray[i];
  }
  for (let i = 0; i < oddArray.length; i++) {
    oddNumbersClass[i].innerHTML = oddArray[i];
  }
};
