const array = [5, 3, 1, 6, 4, 2];
const kToFind = 4;

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// Find kth largest element - Quick Select
const getPartitionQuickSelect = function (nums, left, right) {
  let i = left;

  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      swap(nums, i, j);
      i++;
    }
  }
  return i - 1;
};

const quickSelect = function (nums, left, right, indexToFind) {
  const partitionIndex = getPartitionQuickSelect(nums, left, right);

  if (partitionIndex === indexToFind) {
    return nums[partitionIndex];
  } else if (indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind);
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind);
  }
};

var findKthLargestSuickSelect = function (nums, k) {
  const indexToFind = nums.length - k;

  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

console.log(findKthLargestSuickSelect(array, kToFind));

// Find kth largest element - Quick Sort
const getPartitionQuickSort = function (nums, left, right) {
  const pivotElement = nums[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivotElement) {
      swap(nums, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(nums, partitionIdx, right);

  return partitionIdx;
};

const quickSort = function (nums, left, right) {
  if (left < right) {
    const partitionIndex = getPartitionQuickSort(nums, left, right);

    quickSort(nums, left, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, right);
  }
};

var findKthLargestQuickSort = function (nums, k) {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length - 1);
  return nums[indexToFind];
};

console.log(findKthLargestQuickSort(array, kToFind));
