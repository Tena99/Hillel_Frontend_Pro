// Task 6.1.
// Output the multiplication table.
// You can use - document.write('text');

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    document.write(`${i * j}, `);
  }
  document.write(`<br>`);
}
