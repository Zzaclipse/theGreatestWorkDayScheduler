// gets the id from the button clicked ex:"hour-9" and gets the text from that block
// then will save them as a pair in local storage
function saveText() {
  var hourClicked = $(this).parent().attr("id");
  var textInBox = $(this).parent().children().eq(1).val();
  localStorage.setItem(hourClicked, textInBox);
}

// eventlistener on all save buttons that will call saveText function on click
$(".saveBtn").on("click", saveText);

// gets current time from moment and then loops through all time blocks and if the hour id is less than the hour it adds
// past class which will be grey, if they are equal it adds present class which will be red and if hour id is greater than
// current hour it will add future class which is green
function colorBlocks() {
  var currentHour = parseInt(moment().format("H"));

  for (var i = 0; i < 9; i++) {
    var hourBlock = parseInt(
      $(".container").children().eq(i).attr("id").split("-")[1]
    );

    if (hourBlock < currentHour) {
      $(".container").children().eq(i).children().eq(1).addClass("past");
    } else if (hourBlock === currentHour) {
      $(".container").children().eq(i).children().eq(1).addClass("present");
    } else {
      $(".container").children().eq(i).children().eq(1).addClass("future");
    }
  }
}

// puts the colors on the time blocks when page is opened
colorBlocks();

// calls this function every second
var interval = setInterval(colorBlocks, 1000);

// renders any text saved in local storage in to their respective hour blocks so when you refresh the page they will stay there
$("#hour-9").children().eq(1).text(localStorage.getItem("hour-9"));
$("#hour-10").children().eq(1).text(localStorage.getItem("hour-10"));
$("#hour-11").children().eq(1).text(localStorage.getItem("hour-11"));
$("#hour-12").children().eq(1).text(localStorage.getItem("hour-12"));
$("#hour-13").children().eq(1).text(localStorage.getItem("hour-13"));
$("#hour-14").children().eq(1).text(localStorage.getItem("hour-14"));
$("#hour-15").children().eq(1).text(localStorage.getItem("hour-15"));
$("#hour-16").children().eq(1).text(localStorage.getItem("hour-16"));
$("#hour-17").children().eq(1).text(localStorage.getItem("hour-17"));

// displays day of the week, month and date on top of page under title
$("#currentDay").text(moment().format("dddd MMMM Do"));
