// TODO: Using moment.js, store the current date in a variable and append it to the p element with id = 'current day'
var currentDate = moment().format("MMMM Do YYYY"); 
$('#currentDay').append(currentDate);

// create a time block div for each hour until 5pm.
//containing a child div displaying the hour, a text area for user input, and a save button

//when the page loads, retrieve the existing array of time block schedule items and display them on the page 

// when the user clicks on a time block div and the event target has a class = 'btn', a function should be called that sets the value of the div's text area to the array of schedule items

// the array of schedule items should be set in local storage


var currentTime = moment().format("hA")

//FOR each div with class = hour
// IF the div's text content < currentTime, give it's parent div class = 'past'
// Else if if the div's text content == current time, give it parent div class = 'present'
// Else give it's parent div a class == 'future'
var hourDivs = $('.hour')
for (var i = 0; i < hourDivs.length; i ++){
    console.log(hourDivs[i].textContent)
}


