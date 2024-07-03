let passwardBox = document.getElementById("passward");
let length = 12;

const uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghigklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "$@*~/-()_^%+&=|#"
const allChars = uppercase + lowercase + number + symbols

function createPassward() {
  let passward = "";
  passward += uppercase[Math.floor(Math.random() * uppercase.length)];
  passward += lowercase[Math.floor(Math.random() * lowercase.length)];
  passward += number[Math.floor(Math.random() * number.length)];
  passward += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > passward.length) {
    passward += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwardBox.value = passward;
}
function copyPassward() {
  passwardBox.select();
  document.execCommand("copy");
}