const nums = new Set();
while(nums.size !== 8) {
  nums.add(Math.floor(Math.random() * 40) + 1);
}

console.log([...nums]);