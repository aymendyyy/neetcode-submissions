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

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, freq] of hashTable) {
            buckets[freq].push(num);
        }

        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
