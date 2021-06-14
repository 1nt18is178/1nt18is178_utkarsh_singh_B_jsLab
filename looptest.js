
// Utkarsh Singh, 1NT18IS178
<!--simple javascript code to show looping-->

let raw = [
  "sheamus",
  90,
  "rko",
  90,
  "cesaro",
  90,
  "James",
  90,
  "Johncena",
  80,
  "V",
  90,
  "rock",
  90,
];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

raw.forEach((element) => {
  console.log(`${element} + 60`);
});

raw.forEach((element) => {
  console.log(element + 50);
});

raw.forEach((element) => {
  if (element == 90) console.log(element + 20);
  else console.log(element);
});

raw.forEach((element) => {
  if (element === 90) console.log(element + 70);
  else console.log(element);
});
