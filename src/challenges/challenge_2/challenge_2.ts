
"use strict"

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

type SameType = 'same' | 'notSame'
type EqualResult = true | false

interface FunctionResult {
  isSameType: SameType;
  isEquals: EqualResult;
}

const isEqual = (a: any, b: any ): FunctionResult => {
  let isSameType: SameType = 'notSame';
  let isEquals: EqualResult = false;

  if (typeof a === typeof b) isSameType = 'same';
  if (a === b) isEquals = true;

  return { isSameType, isEquals };
}