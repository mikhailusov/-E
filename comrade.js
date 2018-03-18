var dict = {
  // "a": "б",
  "b": "ь",
  "c": "с",
  // "d": "д",
  "e": "з",
  // "f": "г",
  // "g": "g",
  "h": "п",
  "i": "!",
  // "j": "ж",
  "k": "к",
  "l": "l",
  "m": "пп",
  "n": "п",
  "o": "о",
  "p": "р",
  "q": "ч",
  "r": "г",
  // "s": "3",
  "t": "т",
  "u": "ц",
  // "v": "v",
  "w": "ш",
  "x": "х",
  "y": "у",
  "z": "и",
  // "A": "А",
  // "B": "В",
  // "C": "С",
  "D": "Д",
  "E": "З",
  "F": "Г",
  // "G": "Б",
  // "H": "Н",
  "I": "1",
  // "J": "Г",
  // "K": "К",
  // "L": "L",
  // "M": "М",
  "N": "И",
  "O": "Ф",
  "P": "Р",
  "Q": "О",
  "R": "Я",
  // "S": "S",
  // "T": "Т",
  "U": "Ц",
  // "V": "V",
  "W": "Ш",
  "X": "Х",
  "Y": "У",
  // "Z": "Z"
}

var initTextPresent = true;

window.addEventListener("keypress", keyPressHandler, false);
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("click", clickHandler, false);

function keyPressHandler(e) {
    removeInitText();
    let field = document.getElementById("field");
    let key = String.fromCharCode(e.keyCode);
    if (key in dict) {
      key = dict[key];
    }
    field.value = field.value + key;
}

function keyDownHandler(e) {
  removeInitText();
  let field = document.getElementById("field");
  if (e.keyCode == 8) {
    let content = field.value.slice(0, -1);
    field.value = content;
  }
}

function clickHandler(e) {
  removeInitText();
}

function removeInitText() {
  let field = document.getElementById("field");
  if (initTextPresent) {
    field.value = '';
    initTextPresent = false;
  }
}
