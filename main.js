/* Instructions
You are managing a library system where books and movies are stored in a 2D
    array, with each row representing a shelf, and each column representing an item
    on that shelf.
Tasks
    Make sure to write the code for each task using only bracket notation.
        Task 1: Create a multi-dimensional array with nine books and/or movies of your
            choice.
        Task 2: Access and log all the elements in the array using bracket notation with
            numbers.
        Task 3: Access and log all the elements in the array using bracket notation with
            variables as indices. Use the variables row and item.
        Task 4: Write a loop that prints all the items on the second shelf. */
//task 1
let libContentArray = [
  ["The Matrix", "Braveheart", "Inception"],
  ["All It Takes Is a Goal", "Soundtracks", "The Hobbit"],
  ["Extreme Ownership", "The Go-giver", "The Martian"],
];
console.log(libContentArray);

//task 2
console.log(
  libContentArray[0][0],
  libContentArray[0][1],
  libContentArray[0][2],
  libContentArray[1][0],
  libContentArray[1][1],
  libContentArray[1][2],
  libContentArray[2][0],
  libContentArray[2][1],
  libContentArray[2][2]
);

//task 3
let row;
let item;

for (row = 0; row < libContentArray.length; row++)
  for (item = 0; item < libContentArray[row].length; item++)
    console.log(
      `
"task 3" + ${libContentArray[row][item]}`
    );

//task 4

row = 1;
for (let item = 0; item < 3; item++) {
  console.log(`    "task 4" ${libContentArray[row][item]}`);
}
