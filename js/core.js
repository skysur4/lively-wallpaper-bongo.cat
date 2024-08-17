Array.prototype.remove = function(el) {
  return this.splice(this.indexOf(el), 1);
}
const KeyEnum = Object.freeze({
  "Q": "left",
  "W": "left",
  "E": "left",
  "R": "left",
  "T": "left",
  "A": "left",
  "S": "left",
  "D": "left",
  "F": "left",
  "G": "left",
  "Z": "left",
  "X": "left",
  "C": "left",
  "V": "left",
  "1": "left",
  "2": "left",
  "3": "left",
  "4": "left",
  "5": "left",
  "6": "left",
  "Y": "right",
  "U": "right",
  "I": "right",
  "O": "right",
  "P": "right",
  "[": "right",
  "]": "right",
  "H": "right",
  "J": "right",
  "K": "right",
  "L": "right",
  ";": "right",
  "'": "right",
  "B": "right",
  "N": "right",
  "M": "right",
  ",": "right",
  ".": "right",
  "/": "right",
  "7": "right",
  "8": "right",
  "9": "right",
  "0": "right",
  "-": "right",
  "=": "right"
})
const ClickKeyEquivalentEnum = Object.freeze({
  "1": "A",
  "2": " ",
  "3": "L"
})
var pressed = [];

$(document).ready(function() {
});

$.play = function(key, state) {
  var commonKey = KeyEnum[key];
  var id = "#";
  if (commonKey === undefined) {
	id = id + "mouth";
  } else {
	id = id + "paw-" + commonKey;
  }

  if (state == true) {
    if (jQuery.inArray(commonKey, pressed) !== -1) {
      return;
    }
    pressed.push(commonKey);
  } else {
    pressed.remove(commonKey);
  }
  $(id).css("background-position-x", (state ? "-800px" : "0"));
}

$(document).on("mousedown mouseup", function(e) {
  if (!window.matchMedia("(pointer: coarse)").matches && !$(e.target).is("a, a *")) {
    var keyboardEquivalent = ClickKeyEquivalentEnum[e.which];
    $.play(keyboardEquivalent, e.type === "mousedown");
  }
});
$(document).on("keydown keyup", function(e) {
    $.play(e.key.toUpperCase(), e.type === "keydown");
});
