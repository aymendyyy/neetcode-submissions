class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashTable = new Map();

        for (let i = 0; i < nums.length; i++) {
            const value = hashTable.get(nums[i]) || 0;

            if (value >= 1) {
                return true;
            }

            hashTable.set(nums[i], value + 1);
        }

        return false;
    }
}