class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedList = "";

    for (let word of strs) {
      encodedList += word.length + "#" + word;
    }

    return encodedList;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let decodeList = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      // قراءة طول الكلمة حتى نصل إلى #
      while (str[j] !== "#") {
        j++;
      }

      let length = Number(str.substring(i, j));

      // الانتقال إلى بداية الكلمة
      i = j + 1;

      // استخراج الكلمة حسب طولها
      let word = str.substring(i, i + length);
      decodeList.push(word);

      // الانتقال إلى بداية المعلومة التالية
      i += length;
    }

    return decodeList;
  }
}

let a = new Solution();

let code = a.encode(["hello", "world"]);
console.log(code);              // 5#hello5#world
console.log(a.decode(code));    // ["hello", "world"]