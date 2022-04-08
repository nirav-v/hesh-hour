// TODO: Using moment.js, store the current date in a variable and append it to the p element with id = 'current day'
var currentDate = moment().format("MMMM Do YYYY"); 
$('#currentDay').append(currentDate);

// add a time block div for each hour until 5pm.

// on click on save btn, a function sets the value of it most recent sibling, the text area el, in local storage with the key as the id (#hour-9..) of its parent div

//when the page loads, retrieve the existing array of time block schedule items and display them on the page 

// console.log(scheduleItem)
var saveBtn = $('.saveBtn')
var blockInput = (saveBtn.prev().val())
var blockId = (saveBtn.parent().attr('id'))

blockInput.append = localStorage.getItem(blockId)

for (var i = 0; i < localStorage.length; i ++){
    console.log(window.localStorage.getItem('blockId'[i]))
}
    
saveBtn.on('click', function () {
    // console.log(scheduleItem.val()) // this works?
    blockInput = ($(this).prev().val())
    console.log(blockInput)
    blockId = ($(this).parent().attr('id'))
    console.log(blockId)
    localStorage.setItem(blockId, blockInput)
    
})


// // the array of schedule items should be set in local storage

var currentTime =  parseInt(moment().format("H"))
console.log(currentTime)

// //FOR each div with class = time-block
// // IF the div's id split at '-' and parsed to integer < currentTime parsed to integer, add class 'past' 
// // Else if if the div's hour id == current time, add class 'present' its parent div
// // Else add class 'future' to  it's parent div

var timeBlockEl = $('.time-block')

for (var i = 0; i < timeBlockEl.length; i++) {
        var blockTime = parseInt(timeBlockEl[i].id.split("-")[1])
// if blockTime < currentTime, add class past to timeBlockEl
    if (blockTime < currentTime){
        timeBlockEl.eq(i).addClass('past') //eq(i) annoying jQuery syntax for index
    } else if (blockTime > currentTime) {
        timeBlockEl.eq(i).addClass('future')
    } else timeBlockEl.eq(i).addClass('present')
}

