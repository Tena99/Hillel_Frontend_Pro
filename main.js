// Task 4.
// Three different numbers are entered. Find which one is the average (greater than one but less than the other).

let first_number = prompt("Please enter the first number");
let second_number = prompt("Please enter the second number");
let third_number = prompt("Please enter the third number");

if (
  first_number == null ||
  second_number == null ||
  third_number == null ||
  first_number == "" ||
  second_number == "" ||
  third_number == ""
) {
  alert(`Unfortunately, you did not specify one or more numbers.`);
} else if (first_number > second_number && first_number < third_number) {
  alert(`Thank you! The average number is ${first_number}`);
} else if (first_number < second_number && first_number > third_number) {
  alert(`Thank you! The average number is ${first_number}`);
} else if (second_number > first_number && second_number < third_number) {
  alert(`Thank you! The average number is ${second_number}`);
} else if (second_number < first_number && second_number > third_number) {
  alert(`Thank you! The average number is ${second_number}`);
} else if (third_number > first_number && third_number < second_number) {
  alert(`Thank you! The average number is ${third_number}`);
} else if (third_number < first_number && third_number > second_number) {
  alert(`Thank you! The average number is ${third_number}`);
} else if (first_number == second_number) {
  alert(`Thank you! The average number is ${first_number}`);
} else if (second_number == third_number) {
  alert(`Thank you! The average number is ${second_number}`);
} else if (third_number == first_number) {
  alert(`Thank you! The average number is ${third_number}`);
} else if (third_number < first_number && third_number > second_number) {
  alert(`Thank you! The average number is ${third_number}`);
} else {
  alert(`Please try again`);
}
