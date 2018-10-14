const translatedValues = new Map([
  [["a", "b", "c"], 2],
  [["d", "e", "f"], 3],
  [["g", "h", "i"], 4],
  [["j", "k", "l"], 5],
  [["m", "n", "o"], 6],
  [["p", "q", "r", "s"], 7],
  [["t", "u", "v"], 8],
  [["w", "x", "y", "z"], 9]
])

export default function textToT9(str) {
  if (typeof str !== "string" || !str.length) return ""

  const char = str[0]

  if (char.match(/[A-Za-z]/)) {
    for (let [alphaCharacters, t9Value] of translatedValues) {
      if (alphaCharacters.indexOf(char.toLowerCase()) > -1) {
        return t9Value + textToT9(str.slice(1))
      }
    }
  } else {
    return char + textToT9(str.slice(1))
  }
}