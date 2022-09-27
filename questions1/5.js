const nums = new Set();
while(nums.size !== 8) {
  nums.add(Math.floor(Math.random() * 40) + 1);
}

console.log([...nums]);
// // Array.from({length: 40}, () => Math.floor(Math.random() * 40));
// // Array(40).fill().map(() => Math.round(Math.random() * 40))

const ARRAY_LENGTH = 10
const randomArray = []
for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.random())}