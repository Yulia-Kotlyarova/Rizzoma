"use strict";

$(".range__range").slider({
  min: 0,
  max: 15000,
  values: [5000, 10000],
  range: true,
  animate: "fast",
  slide: function slide(event, ui) {
    $(".range__result-text").text("\u043E\u0442 ".concat(ui.values[0], "\u20BD \u0434\u043E ").concat(ui.values[1], "\u20BD"));
  }
});
var result1 = $(".range__range").slider("values", 0);
var result2 = $(".range__range").slider("values", 1);
$(".range__thumb-left").val(result1);
$(".range__thumb-right").val(result2);
$(".range__result-text").text("\u043E\u0442 ".concat(result1, "\u20BD \u0434\u043E ").concat(result2, "\u20BD"));
$("#range__result").val($(".range__range").slider("value"));