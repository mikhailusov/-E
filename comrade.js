let dict = {
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
  "w": "щ",
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
  "W": "Щ",
  "X": "Х",
  "Y": "У",
  // "Z": "Z"
}

window.addEventListener("keypress", keyPressHandler, false);
window.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  var field = document.getElementById("field");
  if (e.keyCode == 8) {
    var content = field.innerHTML.slice(0, -1);
    field.innerHTML = content;
  }
}

function keyPressHandler(e) {
  var field = document.getElementById("field");
    var key = String.fromCharCode(e.keyCode);
    if (key in dict) {
      key = dict[key];
    }
    field.append(key);
}
