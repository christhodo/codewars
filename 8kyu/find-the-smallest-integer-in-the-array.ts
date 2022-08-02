//Given an array of integers your solution should find the smallest integer.

//My Solution

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b, 0)[0];
  }
}

//Best Practice
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
