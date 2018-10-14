# text-to-t9


**Text to T9** is a JavaScript module useful for conversing strings to [T9](https://en.wikipedia.org/wiki/T9_(predictive_text)) sequences.

### Usage

First, install the module:

```
npm install -S text-to-t9
```

Then, use it in your application:

```js
// ES module import
import textToT9 from "text-to-t9"
// Require
const textToT9 = require("text-to-t9").default

console.log( textToT9("HelloWorld") )

```