
"use strict"

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const takeLastCharacters = (str: string): string => {
  const strLength = str.length;

  return str[strLength-3] + str[strLength-2] + str[strLength-1];
}