
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}

let test = new Solution();

console.log(test.isPalindrome("Was it a car or a cat I saw"));
// true

console.log(test.isPalindrome("race a car"));
// false
