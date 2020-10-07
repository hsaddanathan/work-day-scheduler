console.log("Hello World");

// 1. Create an array of Hours
var workDayHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

// 2. Save button

// 3. Set Current Time from Moment  // Format: moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(moment().format('MMMM Do YYYY, h:mm a'))
var time = setInterval(function(){
    var momentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(momentTime)

})
