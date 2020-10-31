$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function(event) {
      
      event.preventDefault();
        
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // set variable to current time
      var currentHour = moment().hours();
      //console.log(currentHour);

      // This array is the time blocks in military time
      var blockTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
      //console.log(blockTimes); 

      // loop over time blocks using a for loop
      $(".time-block").each(function() {

        for (i=0; i < blockTimes.length; i++){

            //check if we've moved past this time and changes block color to the appropiate color
            if (blockTimes[i] < currentHour) {
                $(this).addClass("past");
            } 
            else if (blockTimes[i] === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        }
      });
    }
  
    hourUpdater();
  
    // Interval checks to see if time needs to be updated
    var updateInterval = setInterval(hourUpdater, 600000);
  
    // Saved data from localStorage is loaded
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
  
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });