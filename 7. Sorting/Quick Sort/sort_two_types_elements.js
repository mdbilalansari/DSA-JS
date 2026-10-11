'use strict';

let arr = [5, 13, -6, -9, 12, 11, 10, -22, -34, -13, -15];

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n)
function segregate_even_odd(arr) {
  let low = -1,
    high = arr.length;

  while (true) {
    do {
      low++;
    } while (Math.abs(arr[low]) % 2 == 0);

    do {
      high--;
    } while (Math.abs(arr[high]) % 2 == 1);

    if (low >= high) {
      return;
    }
    swap(arr, low, high);
  }
}

// Time Complexity: O(n)
function segregate_positive_negative(arr) {
  let low = -1,
    high = arr.length;

  while (true) {
    do {
      low++;
    } while (arr[low] > 0);

    do {
      high--;
    } while (arr[high] <= 0);

    if (low >= high) {
      return;
    }
    swap(arr, low, high);
  }
}

segregate_even_odd(arr);
console.log(arr);

segregate_positive_negative(arr);
console.log(arr);
