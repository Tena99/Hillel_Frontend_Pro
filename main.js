// Task 5.
// Display on the page in one line, comma separated numbers from 10 to 20 and vice versa.
// You can use - document.write('text');

for (let i = 10; i < 21; i++) {
  if (i == 20) {
    document.write(`${i}; `);
  } else {
    document.write(`${i}, `);
  }
}

for (let i = 20; i > 9; i--) {
  if (i == 10) {
    document.write(`${i}`);
  } else {
    document.write(`${i}, `);
  }
}
