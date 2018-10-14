require("@babel/register")

var textToT9 = require("../src/index.mjs").default

var test = require("tape")

test("should convert alphabetic strings", function (t) {
  t.plan(2)

  t.equal(textToT9("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "22233344455566677778889999")
  t.equal(textToT9("abcdefghijklmnopqrstuvwxyz"), "22233344455566677778889999")
})

test("should handle mixed-content strings", function (t) {
  t.plan(2)

  t.equal(textToT9("123ABCDEFGHIJKLMNOPQRSTUVWXYZ456!"), "12322233344455566677778889999456!")
  t.equal(textToT9("123abcdefghijklmnopqrstuvwxyz456!"), "12322233344455566677778889999456!")
})

test("should handle empty strings", function (t) {
  t.plan(1)

  t.equal(textToT9(""), "")
})

test("should handle non-string types", function (t) {
  t.plan(7)

  t.equal(textToT9(123456), "")
  t.equal(textToT9(true), "")
  t.equal(textToT9(false), "")
  t.equal(textToT9([]), "")
  t.equal(textToT9({}), "")
  t.equal(textToT9(null), "")
  t.equal(textToT9(undefined), "")
})