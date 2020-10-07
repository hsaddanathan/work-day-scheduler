console.log("Hello World");

// 1. Create an array of Hours
var workDayHours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

var militaryTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// 2. Set Current Time from Moment  // Format: moment().format('MMMM Do YYYY, h:mm:ss a')
// console.log(moment().format('MMMM Do YYYY, h:mm a'))
var time = setInterval(function () {
  var momentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  // 2a. Set current time to the "#currentDay" p tag
  $("#currentDay").html(momentTime);
});

// updateRowColor()
function rowColor() {
  //Grab current hour
  var currentHour = moment().hour();
  console.log(currentHour);
  //Checks Id which is coded to military time.
  //Depending on the time the appropriate class will be assigned and
  //The background of the text input will change
  $(".time-block").each(function () {
    var rowHour = parseInt($(this).attr("id"));
    if (rowHour < currentHour) {
      $(this).children("textarea").addClass("past");
    } else if (rowHour === currentHour) {
      $(this).children("textarea").addClass("present");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });
}

// 3. Populate rows
function populateRows() {
  for (var i = 0; i < workDayHours.length; i++) {
    var newRow = $("<div>");
    newRow.addClass("row time-block");
    newRow.attr("id", militaryTime[i]);

    var hourHeader = $("<div>");
    hourHeader.addClass("col-2 hour");
    hourHeader.append(workDayHours[i]);
    newRow.append(hourHeader);

    var taskInput = $("<textarea placeholder='Add Event'></textarea>");
    taskInput.addClass("col-9");
    newRow.append(taskInput);

    //<button type="button" class="btn btn-primary">Primary</button>
    var saveButton = $("<button type='button submit'></button>");
    saveButton.addClass("col-1 saveBtn btn btn-primary");
    saveButton.append("<i :hover class='far fa-save fa-2x'></i>");
    newRow.append(saveButton);

    $("#content").append(newRow);
  }
  rowColor();
}

populateRows();

// 2. Save button
