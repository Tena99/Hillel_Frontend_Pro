// Task 7.
// Change the first characters of words in the string to uppercase 'a'.toUpperCase().
//  For example. By default the string is 'lorem ipsum', the result will be 'Lorem Ipsum'.

const newString = "lorem ipsum dolor amen";

let result;
let pos = 0;

while (pos !== -1) {
  if (pos == 0) {
    result = newString.substr(pos, 1).toUpperCase();
    console.log(result);
  } else {
    result += newString.substr(pos + 1, 1).toUpperCase();
    console.log(result + "   else");
  }

  let initialPos;

  if (pos == 0) {
    initialPos = pos;
  } else {
    initialPos = pos + 1;
    console.log(initialPos + " initial");
  }

  pos = newString.indexOf(" ", pos + 1);
  console.log(pos);

  if (pos !== -1) result += newString.substring(initialPos + 1, pos + 1);
  console.log(result);

  if (initialPos > 0 && pos == -1) {
    result += newString.substring(initialPos + 1, newString.stringLength);
    document.write(result);
  }
}
