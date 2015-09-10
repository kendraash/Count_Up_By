var numberCounter = function(upTo, countBy) {

  if ((upTo && countBy != null) && (upTo >= countBy)) {
    return countUpBy(upTo, countBy);
  }
  else {
    return "please provide valid values";
  }
};

var countUpBy = function(upTo, countBy) {
  var counter = 0;
  var output = [];
  while(counter < upTo) {
    counter = counter + countBy;
    if (counter > upTo)
      break;
    output.push(counter);
  }
  return output;
};


$(document).ready(function() {
  $("form#count-up-by").submit(function(event) {
    var upTo = parseInt($('input#upTo').val());
    var countBy = parseInt($('input#countBy').val());
    var output = numberCounter(upTo, countBy);

    $(".upTo").text(upTo);
    $(".countBy").text(countBy);
    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});
