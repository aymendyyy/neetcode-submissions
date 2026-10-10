class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for (const word of strs) {
            const key = word.split("").sort().join("");

            if (!hashMap.has(key)) {
                hashMap.set(key, []);
            }

            hashMap.get(key).push(word);
        }

        return Array.from(hashMap.values());
    }
}