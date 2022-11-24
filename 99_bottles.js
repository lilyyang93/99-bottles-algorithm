function bottleSong(numBottles) {
  let num = numBottles
  for (let i = num; num >= 0; num--) {
    if (num > 2) {
      console.log(`${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottles of beer on the wall.`)
    } else if (num === 2) {
      console.log("2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.")
    } else if (num ===1) {
      console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
    } else {
      console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${numBottles} bottles of beer on the wall`)
    }
  }
};

bottleSong(5);
