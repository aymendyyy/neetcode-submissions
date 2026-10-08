class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashTable = new Map();
        for (let i = 0; i < nums.length; i++) {
            hashTable.set(nums[i], i);
        }
        for (let i = 0; i < nums.length; i++) {
            let a = target - nums[i];
            if (hashTable.has(a) && i != hashTable.get(a)) return [i, hashTable.get(a)];
        }
    }
}
