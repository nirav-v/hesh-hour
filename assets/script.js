// TODO: Using moment.js, store the current date in a variable and append it to the p element with id = 'current day'
var currentDate = moment().format("MMMM Do YYYY"); 
$('#currentDay').append(currentDate);

// add a time block div for each hour until 5pm.

// on click on save btn, a function sets the value of its most recent sibling, the text area el, in local storage with the key as the id (#hour-number..) of its parent div

var saveBtn = $('.saveBtn')
    
saveBtn.on('click', function () {
    // console.log(scheduleItem.val()) // this works?
    blockInput = ($(this).prev().val())
    blockId = ($(this).parent().attr('id'))
    localStorage.setItem(blockId, blockInput)
})
// select each time block id and select the .description class, setting the val to localstorage.getItem(id key = 'hour-number')
// making a loop for this with jquery vars this made my brain hurt

$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))


var currentTime =  parseInt(moment().format("H"))
console.log(currentTime)

// //FOR each div with class = time-block
// // IF the div's id split at '-' and parsed to integer < currentTime parsed to integer, add class 'past' 
// // Else if if the div's hour id == current time, add class 'present' its parent div
// // Else add class 'future' to  it's parent div

var timeBlockEl = $('.time-block')
// adding class to each time block (color in css) based on comparsion between id and current time
for (var i = 0; i < timeBlockEl.length; i++) {
        var blockTime = parseInt(timeBlockEl[i].id.split("-")[1])
// if blockTime < currentTime, add class past to timeBlockEl
    if (blockTime < currentTime){
        timeBlockEl.eq(i).addClass('past') //eq(i) annoying jQuery syntax for index
    } else if (blockTime > currentTime) {
        timeBlockEl.eq(i).addClass('future')
    } else timeBlockEl.eq(i).addClass('present')
}

