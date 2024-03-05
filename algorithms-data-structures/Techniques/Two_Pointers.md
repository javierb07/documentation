# Two Pointers

Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array. For example, given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

The pointers are some times called slow-runner and the fast-runner.

Another classic example is to remove duplicates from a sorted array.

One pointer starts from the beginning while the other pointer starts from the end.

They move toward each other until they both meet. 

Let's take a look at a classic problem: Reverse the characters in a string:

First, let's assume that we already have the swap function defined below:

``` C#
private void swap(char[] str, int i, int j) {
    char temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}
```
The idea is to swap the first character with the end, advance to the next character and swapping repeatedly until it reaches the middle position. We calculate the middle position as n/2. You should verify that the middle position works for both odd and even size of array.

``` C#
public void reverse(char[] str) {
    int n = str.length;
    for (int i = 0; i < n / 2; i++) {
        swap(str, i, n - i - 1);
    }
}
```
Or we can also solve the problem using the two-pointer technique.

``` C#
public void reverse(char[] str) {
    int i = 0, j = str.length - 1;
    while (i < j) {
        swap(str, i, j);
        i++;
        j--;
    }
}
```

Another example problem in LeetCode: https://leetcode.com/problems/container-with-most-water/