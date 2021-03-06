/*
Write a sum function which will work properly when invoked using either syntax below.

```javascript
sum(2,3);  // Outputs 5
```
```javascript
sum(2)(3); // Outputs 5
```

HINT : use closures



solutions:
*/
function sum(x, m) {
 if (m === undefined) {
   return function(m){
     return x + m;
   }
 }
  return x + m;
}
