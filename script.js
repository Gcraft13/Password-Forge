const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//

function createPassword() {
  const passwordBox = document.getElementById("password");
  const passwordLength = parseInt(document.getElementById("materials").value);
  let password = [];

  for (i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    let letter = characters[randomNumber];
    password.push(letter);
  }

  let passwordAsString = password.toString();
  let newPassword = passwordAsString.replaceAll(",", "");

  passwordBox.value = newPassword;
}

function resetPassword() {
  document.getElementById("materials").value = "";
  document.getElementById("password").value = "";
}
