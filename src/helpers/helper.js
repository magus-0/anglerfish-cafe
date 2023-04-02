import { foodItems, spaceItems, drinkItems } from "../constants/words"

export function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// takes two lists of strings make a new array of strings
// combining a random word in the first array with a random word 
// in the second array without duplicates.
function generateNames(arr1, arr2) {
  // const shortest = Math.min(arr1.length, arr2)
  const arrCopy = [...arr1];
  const arrCopy2 = [...arr2];

  const result = [];

  while (arrCopy.length > 0 && arrCopy2.length > 0) {
    const randIdx1 = Math.floor(Math.random() * arrCopy.length);
    const randIdx2 = Math.floor(Math.random() * arrCopy2.length);
    const word1 = arrCopy[randIdx1];
    const word2 = arrCopy2[randIdx2];

    result.push(`${word1} ${word2}`);

    // Remove the used words
    arrCopy.splice(randIdx1, 1);
    arrCopy2.splice(randIdx2, 1);
  }

  return result;
}

function generatePrice(minCents, maxCents) {
  //rand integer between range in increments of 25
  const randCents = Math.floor(Math.random() * (maxCents - minCents) / 25) * 25 + minCents;

  const dollars = randCents / 100;
  const formattedUSD = dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formattedUSD;
}

export function generateMenu() {
  const foodNames = generateNames(spaceItems, foodItems);
  const drinkNames = generateNames(spaceItems, drinkItems);

  const food = {};
  const drink = {};

  for (const ele of foodNames.slice(0, 6)) {
    food[ele] = generatePrice(1000, 2500);
  }

  for (const ele of drinkNames.slice(0, 6)) {
    drink[ele] = generatePrice(500, 1500);
  }


  return {
    food,
    drink
  }
}