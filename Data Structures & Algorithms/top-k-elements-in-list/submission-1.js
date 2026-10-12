
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const hashTable = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (hashTable.has(nums[i])) {
        hashTable.set(nums[i], hashTable.get(nums[i]) + 1);
      } else {
        hashTable.set(nums[i], 1);
      }
    }

    const sorted = [...hashTable.entries()]
      .sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(entry => entry[0]);
  }
}

