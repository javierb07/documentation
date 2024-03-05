# Sliding Window

It is a computational technique which aims to reduce the use of nested loops and replace it with a single loop, thereby reducing the time complexity.

Consider a long chain connected together. Suppose you want to apply oil in the complete chain with your hands, without pouring the oil from above.

## Prerequisite to use the sliding window technique

The use of Sliding Window technique can be done in a very specific scenario, where the size of window for computation is fixed throughout the complete nested loop. Only then the time complexity can be reduced. 

## How to use the sliding window Technique?

The general use of the sliding window technique can be demonstrated as following:

1. Find the size of window required 
2. Compute the result for 1st window, i.e. from start of data structure
3. Then use a loop to slide the window by 1, and keep computing the result window by window.

# Examples to illustrate the use of the sliding window technique

Example: Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

```
Input  : arr[] = {100, 200, 300, 400}, k = 2
Output : 700

Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

Input  : arr[] = {2, 3}, k = 3
Output : Invalid
There is no subarray of size 3 as size of whole array is 2.
```

``` javascript
    // Javascript code for
    // O(n) solution for finding
    // maximum sum of a subarray
    // of size k
    function maxSum(arr, n, k) {
        let max = 0;
        let sum = 0;
        // find initial sum of first k elements
        for (let i = 0; i < k; i++) {
            sum += arr[i];
            max = sum;
        }
        // iterate the array once
        // and increment the right edge
        for (let i = k; i < n; i++) {
            sum += arr[i] - arr[i - k];
              
            // compare if sum is more than max,
            // if yes then replace
            // max with new sum value
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }
  
// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
document.write(maxSum(arr, n, k));
```