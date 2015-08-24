# ImmutableJS Overview

### Index
  1. Mutable vs. Immutable
  2. Persistent Data Structures?
  3. Structure Data Sharing
  4. ImmutableJS API
  5. Build it into todo App (undo, time machine)

### Mutable vs. Immutable

In JavaScript we have 6 primitive data types:

  1. Boolean
  2. Number
  3. String
  4. Symbol
  5. Null
  6. Undefined

`Note: Symbol was introduced in ECMAScript 6`

All of these primitive data types are **immutable** which means that their values cannot be changed but instead new values are created. For example we can have a stirng literal "Hello" assigned to a variable `str` and then attempt to change the first character to "Y":

```javascript
var str = 'Hello';
str[0] = 'Y';
console.log(str);
```
**This would output:**

`Hello`

The only way to manipulate with the value of the string is through methods such as `tril`, `slice`, `replace` etc. However, even with those methods the original value does not change:

```javascript
var str1 = 'Hello';
var str2 = str1.replace('H', 'Y');
console.log(str1); // This outputs `Hello`
console.log(str2); // This outputs `Yello`
```
