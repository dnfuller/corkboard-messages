var word = $(".word");
var resetBtn = $("#reset");

word.draggable();

resetBtn.click(function () {
  // Reset position
  word.removeAttr('style');

  // Destroy original draggable and create new one
  word.draggable("destroy");
  word.draggable();
});