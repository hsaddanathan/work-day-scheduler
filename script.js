console.log("Hello World");

// 1. Create an array of Hours
var workDayHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var militaryTime = ["9","10","11","12","13","14","15","16","17"]


// 2. Set Current Time from Moment  // Format: moment().format('MMMM Do YYYY, h:mm:ss a')
    // console.log(moment().format('MMMM Do YYYY, h:mm a'))
var time = setInterval(function(){
    var momentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
   // 2a. Set current time to the "#currentDay" p tag
    $("#currentDay").html(momentTime);
})

// 3. Populate rows
function populateRows(){
    for(var i=0; i<workDayHours.length;i++){
        var newRow = "<row>"

    var newRow = $("<div>");
    newRow.addClass("row time-block");
    newRow.attr("id", militaryTime[i]);

    var hourHeader = $("<div>");
    hourHeader.addClass("col-2 hour")
    hourHeader.append(workDayHours[i]);
    console.log(hourHeader)
    newRow.append(hourHeader);

    var taskInput = $("<textarea placeholder='Add Event'></textarea>"
    )
    taskInput.addClass("col-9 future");
    newRow.append(taskInput);

    //<button type="button" class="btn btn-primary">Primary</button>
    
    
    
    
    
    
    $("#content").append(newRow);

    }

}



// updateRowColor()
function updateRowColor(){
    //Grab current hour
    var currentHour = moment().hour();
    console.log(currentHour);
}
    

populateRows()
updateRowColor()


// 2. Save button