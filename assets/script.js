// TODO: Using moment.js, store the current date in a variable and append it to the p element with id = 'current day'
var currentDate = moment().format("MMMM Do YYYY"); 
$('#currentDay').append(currentDate);
