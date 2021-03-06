/*
In this kata you are expected to recover a scattered password in a (m x n) grid (you'll be given directions of all password pieces in the array)

The array will contain pieces of the password to be recovered, you'll get directions on how to get all the the pieces, your initial position in the array will be the character "x".

Heres what the array looks like

```javascript
[
  ["p", "x", "m"],
  ["a", "$", "$"],
  ["k", "i", "t"]
]
```

The given directions would consist of `[left, right, up, down]` and `[leftT, rightT, upT, downT]`, the former would be used to move around the grid while the latter would be used when you have a password to that direction of you.(
**E.g** if you are in a position and the move to make is `leftT` it means theres a password to the left of you, so take the value and move there)

So in the 2d array example above, you will be given the directions `["lefT", "downT", "rightT", "rightT"]`, making for the word `"pa$$"`.

Remember you initial position is the character "x".

So you write the function `getPassword(grid, directions)` that uses the directions to get a password in the grid.

Another example.

```javascript
grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"]
];

directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]

getPassword(grid, directions) // => "lovet"
```



Solution:
*/
function getPassword(grid, directions) {
  let pass = ''
  let x;
  let y;
  
  for(let i = 0; i < grid.length; i++) {
    if(grid[i].includes('x')) {
      x = i
      y = grid[i].indexOf('x')
    }
  }
  directions.forEach(direction => {
    if (direction.includes('right')) y++
    else if (direction.includes('left')) y--
    else if (direction.includes('down')) x++
    else if (direction.includes('up')) x--
    
    if (direction[direction.length - 1] === 'T') pass += grid[x][y]
  })
  return pass
}
