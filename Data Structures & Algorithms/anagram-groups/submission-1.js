class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for (const word of strs) {
            const count = new Array(26).fill(0);

            for (const char of word) {
                const index = char.charCodeAt(0) - 97;
                count[index]++;
            }

            const key = count.join("#");

            if (!hashMap.has(key)) {
                hashMap.set(key, []);
            }

            hashMap.get(key).push(word);
        }

        return Array.from(hashMap.values());
    }
}