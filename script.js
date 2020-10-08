console.log("Hello World");

$(document).ready(function () {
  // Array of Hours (Used for Storage and first column of Rows)
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

  //Array of hours (Military Time used to assign id's to the rows)
  var militaryTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

  // Set Current Time from Moment  // Format: moment().format('MMMM Do YYYY, h:mm:ss a')
  var time = setInterval(function () {
    var momentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    //Set current time to the "#currentDay" p tag
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

  //Clear Button
function showClearButton() {
    //Padding Between bottom of tasks and clear button
    var spacing = $("<div>");
    spacing.attr("id", "spacer");
    $("#content").append(spacing);

    var clearDiv = $("<div>");
    clearDiv.addClass("text-center");

    var clearBtn = $("<button>");
    clearBtn.attr("type", "button");
    clearBtn.attr("id", "clear-tasks");
    clearBtn.addClass("btn btn-primary");
    clearBtn.text("Clear All Tasks");
    $(clearDiv).append(clearBtn);

    $("#content").append(clearDiv);
  }
  // 3. Populate rows
  function populateRows() {
    for (var i = 0; i < workDayHours.length; i++) {
      //Import any saved value from local storage
      var storedTask = localStorage.getItem(workDayHours[i]);
      //If no value stored sets value of stored task to empty string
      if (storedTask === null) {
        storedTask = "";
      }

      var newRow = $("<div>");
      newRow.addClass("row time-block");
      newRow.attr("id", militaryTime[i]);

      var hourHeader = $("<div>");
      hourHeader.addClass("col-2 hour");
      hourHeader.append(workDayHours[i]);
      newRow.append(hourHeader);

      var taskInput = $(
        "<textarea placeholder='Add Event'>" + storedTask + "</textarea>"
      );
      taskInput.addClass("col-9");
      newRow.append(taskInput);

      //<button type="button" class="btn btn-primary">Primary</button>
      var saveButton = $("<button type='button submit'></button>");
      saveButton.addClass("col-1 saveBtn btn btn-primary");
      saveButton.append("<i :hover class='far fa-save fa-2x'></i>");
      newRow.append(saveButton);

      $("#content").append(newRow);

      //Event Listener
      saveButton.on("click", function () {
        var createdTask = $(this).siblings("textarea").val();
        var taskTime = $(this).siblings("div").text();
        // console.log (createdTask);
        // console.log(taskTime);
        localStorage.setItem(taskTime, createdTask);
      });
    }
    rowColor();
    showClearButton();

    $("#clear-tasks").on("click", function (event) {
      event.preventDefault();
      console.log("you clicked button");
      var clearConfirm = confirm(
        "Are you sure you want to clear the scheduler?"
      );
      console.log(clearConfirm);
      if (clearConfirm === true) {
        window.localStorage.clear();
        $(".time-block").remove();
        $("#clear-tasks").remove();
        populateRows();
      }
    });
  }


  populateRows();
});
