class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashTable = new Map();
        if (t.length != s.length) {
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            if (hashTable.has(s[i])) {
                hashTable.set(s[i], hashTable.get(s[i]) + 1);
            } else hashTable.set(s[i], 1);
        }
        for (let i = 0; i < t.length; i++) {
            if (!hashTable.has(t[i])) {
                return false;
            }
            hashTable.set(t[i], hashTable.get(t[i]) - 1);
        }
        for (let i = 0; i < s.length; i++) {
            if (hashTable.get(s[i]) != 0) return false;
        }
        return true;
    }
}
